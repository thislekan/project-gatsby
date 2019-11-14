import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import HomePage from '../components/HomePage';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          hero {
            subheading
            heading
            image {
              childImageSharp {
                fluid(fit: COVER, maxWidth: 383, maxHeight: 370) {
                  src
                  tracedSVG
                }
              }
            }
          }
          intro {
            description
            heading
            image {
              childImageSharp {
                fluid(fit: CONTAIN, maxWidth: 236, maxHeight: 370) {
                  src
                  tracedSVG
                }
              }
            }
          }
          title
          logos {
            image
            link
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <HomePage content={data.markdownRemark.frontmatter} />
    </Layout>
  );
};

export default IndexPage;
