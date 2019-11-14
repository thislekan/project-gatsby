import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import SnippetCard from "../components/SnippetCard";

const Snippet = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query SnippetsQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        sort: { order: DESC, fields: frontmatter___date }
        limit: 4
      ) {
        totalCount
        nodes {
          fields {
            slug
          }
          frontmatter {
            excerpt
            title
            featuredimage {
              childImageSharp {
                fluid(fit: COVER, maxWidth: 334, maxHeight: 169) {
                  src
                  tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `);

  return allMarkdownRemark.nodes.map((post, index) => (
    <SnippetCard post={post} key={index} />
  ));
};

export default Snippet;
