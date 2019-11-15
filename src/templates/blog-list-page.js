import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import BlogTemplate from '../components/blog/Blog';

const BlogPage = (props) => {
  return (
    <Layout path="/blog">
      <BlogTemplate
        pageContext={props.pageContext}
        data={props.data.allMarkdownRemark.nodes}
      />
    </Layout>
  );
};

BlogPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export const blogListQuery = graphql`
  query blogListQuery($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          excerpt
          title
          featuredimage {
            childImageSharp {
              fluid(fit: CONTAIN, maxHeight: 334, maxWidth: 169) {
                src
                tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
