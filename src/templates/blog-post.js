import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Post from '../components/posts/Post';

function BlogPost(props) {
  return (
    <Layout>
      <StaticQuery
        query={graphql`
          query($path: String!) {
            markdownRemark(fields: { slug: { eq: $path } }) {
              html
              timeToRead
              frontmatter {
                date(formatString: "MMMM DD YYYY")
                hero {
                  heading
                  image {
                    childImageSharp {
                      fluid(fit: COVER) {
                        src
                      }
                    }
                  }
                }
                title
                templateKey
              }
            }
          }
        `}
        render={() => (
          <Post
            data={props.data}
            next={props.pageContext.next}
            previous={props.pageContext.previous}
          />
        )}
      />
    </Layout>
  );
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default BlogPost;
