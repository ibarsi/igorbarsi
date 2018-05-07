import moment from 'moment';
import React from 'react';
import Helmet from 'react-helmet';

import SignupForm from '../components/SignupForm';
import { buildPageTitle } from '../utils';

import './blog-post.css';

export const Template = ({ data }) => {
  const post = data.markdownRemark;

  const title = buildPageTitle(post.frontmatter.title);
  const description = post.excerpt;

  return (
    <article>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta
          property="article:author"
          content="https://www.facebook.com/IgorBarsi"
        />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/IgorBarsi"
        />
      </Helmet>

      <div className="content-container blog-post__markdown">
        <header className="blog-post__header">
          <h1 className="blog-post__header-headline">
            {post.frontmatter.title}
          </h1>

          <span className="blog-post__header-byline">
            By Igor Barsi <span className="separator" />{' '}
            {moment(post.frontmatter.date).format('MMMM Do, YYYY')}
          </span>
        </header>

        <div
          className="blog-post__content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <hr className="blog-post__hard-break" />

        <footer className="blog-post__footer">
          <p>Thanks for taking the time to read this post!</p>

          <p>
            Sign up below for occasional updates on my work and the latest in
            software engineering and leadership.
          </p>

          <p>No spam, ever.</p>

          <SignupForm />
        </footer>
      </div>
    </article>
  );
};

export default Template;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        date
        path
        title
      }
    }
  }
`;
