import React from "react";
import "./post.modules.scss";

const Post = ({ data }) => {
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
    </div>
  );
};

export default Post;
