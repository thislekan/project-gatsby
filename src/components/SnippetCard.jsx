import React, { useState } from 'react';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const SnippetCard = ({ post }) => {
  const [state, setState] = useState(false);

  return (
    <div
      className="blog-cards"
      onClick={() => navigate(post.fields.slug)}
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
    >
      <div className="blog-cards__header">
        <Img
          fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
          style={{ height: '100%', borderRadius: '0.4rem' }}
        />
      </div>
      <div
        className={`blog-cards__content ${
          state ? 'blog-cards__content--hover' : ''
        }`}
      >
        <h5>{post.frontmatter.title}</h5>
        <p>
          {post.frontmatter.excerpt
            ? post.frontmatter.excerpt
            : 'Click to view content'}
        </p>
      </div>
    </div>
  );
};

SnippetCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default SnippetCard;
