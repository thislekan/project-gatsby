import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import BlogTemplate from '../components/blog/Blog';

const BlogPage = (props) => {
  return (
    <Layout>
      <BlogTemplate
        pageContext={props.pageContext}
        data={props.data.allMarkdownRemark.nodes}
      />
    </Layout>
  );
};

export const blogListQuery = graphql`
  query blogListQuery($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
