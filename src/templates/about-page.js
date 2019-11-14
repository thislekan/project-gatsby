import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';

export function AboutPageTemplate({ data }) {
  return (
    <div style={{ paddingTop: '8rem', minHeight: 'calc(100vh - 14rem)' }}>
      <h1>{data.frontmatter.title}</h1>
    </div>
  );
}

AboutPageTemplate.propTypes = {};

function AboutPage() {
  const { markdownRemark } = useStaticQuery(graphql`
    query AboutPageQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
        frontmatter {
          title
        }
      }
    }
  `);

  return (
    <Layout path="/about">
      <AboutPageTemplate data={markdownRemark} />
    </Layout>
  );
}

AboutPage.propTypes = {};

export default AboutPage;
