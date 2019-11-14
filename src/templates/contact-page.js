import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';

export function ContactPageTemplate({ data }) {
  return (
    <div style={{ paddingTop: '8rem', minHeight: 'calc(100vh - 14rem)' }}>
      <h1>{data.frontmatter.title}</h1>
    </div>
  );
}

ContactPageTemplate.propTypes = {};

function ContactPage() {
  const { markdownRemark } = useStaticQuery(graphql`
    query ContactPageQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
        frontmatter {
          title
        }
      }
    }
  `);

  return (
    <Layout path="/contact">
      <ContactPageTemplate data={markdownRemark} />
    </Layout>
  );
}

ContactPage.propTypes = {};

export default ContactPage;
