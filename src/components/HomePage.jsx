import React from 'react';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import { Markdown } from 'react-showdown';

import Snippets from '../components/Snippets';

const HomePage = ({ content }) => (
  <div className="homepage">
    <div className="homepage__wrapper">
      <section className="hero">
        <div className="hero__left-div">
          <h1>{content.hero.heading}</h1>
          <p>{content.hero.subheading}</p>
        </div>
        <div className="hero__right-div">
          <Img
            fluid={content.hero.image.childImageSharp.fluid}
            style={{ height: '100%' }}
          />
        </div>
      </section>
      <section className="intro">
        <div className="intro__header">
          <h3>{content.intro.heading}</h3>
        </div>
        <div className="intro__body">
          <div className="intro__body__img-div">
            <Img
              fluid={content.intro.image.childImageSharp.fluid}
              style={{ height: '100%' }}
              imgStyle={{ objectFit: 'scale-down' }}
            />
          </div>
          <div className="intro__body__text-div">
            <Markdown markup={content.intro.description} />
          </div>
        </div>
      </section>
      <section className="blog-section">
        <div className="blog-section__banner">
          <div className="blog-section__banner__wrapper">
            {content.logos.map((logo, index) => (
              <img
                src={logo.image ? logo.image.publicURL : ''}
                key={index}
                alt="Sponsors"
                className="logo-img"
              />
            ))}
          </div>
        </div>
        <div className="blog-section__articles">
          <div className="blog-section__articles__wrapper">
            <Snippets />
          </div>
          <div className="blog-section__readmore-div">
            <button onClick={() => navigate('/blog')}>Read more</button>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default HomePage;
