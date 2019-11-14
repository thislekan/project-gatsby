import React from 'react';
import { Link } from 'gatsby';

import './post.modules.scss';

const Post = ({ data, next, previous }) => {
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead } = markdownRemark;
  return (
    <div className="blogpost">
      <div className="blogpost__header">
        <h1>{frontmatter.title}</h1>
      </div>
      <div className="blogpost__date">
        <p>{frontmatter.date}</p>
        <p className="read-time">
          {timeToRead < 2 ? `${timeToRead} min` : `${timeToRead} mins`}
        </p>
      </div>
      <div
        className="blogpost__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="blogpost__footer">
        <div className="blogpost__footer__node">
          {previous && <>
          <p>Previous Article: </p>
          <Link to={previous.fields.slug}>
            {previous.frontmatter.title}
          </Link>
          </>}
        </div>
        <div className="blogpost__footer__node">
          {next && <>
            <p>Next Article: </p>
            <Link to={next.fields.slug}>
              {next.frontmatter.title}
            </Link>
          </>}
        </div>
      </div>
      {console.log(next, previous)}
    </div>
  );
};

export default Post;
