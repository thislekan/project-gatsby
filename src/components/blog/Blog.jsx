import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import SnippetCard from '../SnippetCard';
import './bloglist.modules.scss';

const BlogTemplate = (props) => {
  const { currentPage, numPages } = props.pageContext;
  const previousPosts =
    currentPage - 1 !== 1 ? '/blog/' + (currentPage - 1).toString() : '/blog';

  return (
    <div className="bloglist">
      <div className="bloglist__welcome">
        <h1>Welcome To Our Blog</h1>
      </div>
      <div className="bloglist__items">
        {props.data.map((post, index) => (
          <SnippetCard post={post} key={index} />
        ))}
      </div>
      <div className="pagination">
        <div className="link-div">
          {currentPage !== 1 && (
            <Link to={previousPosts}>&#x2190; Previous</Link>
          )}
        </div>
        <div className="link-div">
          {numPages > currentPage && (
            <Link to={`/blog/${currentPage + 1}`}>Next &#x2192;</Link>
          )}
        </div>
      </div>
    </div>
  );
};

BlogTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
};

export default BlogTemplate;
