import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';

export function ProductsPageTemplate({ data }) {
  return (
    <div style={{ paddingTop: '8rem', minHeight: 'calc(100vh - 14rem)' }}>
      <h1>{data.frontmatter.title}</h1>
    </div>
  );
}

ProductsPageTemplate.propTypes = { data: PropTypes.object.isRequired };

function ProductsPage() {
  const { markdownRemark } = useStaticQuery(graphql`
    query ProductsPageQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "products-page" } }) {
        frontmatter {
          title
        }
      }
    }
  `);

  return (
    <Layout path="/products">
      <ProductsPageTemplate data={markdownRemark} />
    </Layout>
  );
}

ProductsPage.propTypes = {};

export default ProductsPage;
