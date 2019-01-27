import moment from 'moment';
import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { Layout } from '../layouts';
import { SignupForm } from '../components/SignupForm';
import { SocialLinks } from '../components/SocialLinks';
import { buildPageTitle } from '../utils';
import { FEATURE_SWITCHES } from '../config';

import blogPostStyles from './blog-post.module.css';

const BlogPost = ({ data, location }) => {
  const post = data.markdownRemark;

  const title = buildPageTitle(post.frontmatter.title);
  const description = post.excerpt;

  return (
    <Layout location={location}>
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

        <div className={`content-container ${blogPostStyles.markdown}`}>
          <header className={blogPostStyles.header}>
            <h1 className={blogPostStyles.headerHeadline}>
              {post.frontmatter.title}
            </h1>

            <span className={blogPostStyles.headerByline}>
              By Igor Barsi <span className="separator" />{' '}
              {moment(post.frontmatter.date, 'MM-DD-YYYY').format(
                'MMMM Do, YYYY',
              )}
            </span>
          </header>

          <div
            className={blogPostStyles.content}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <hr className={blogPostStyles.hardBreak} />

          <footer className={blogPostStyles.footer}>
            {FEATURE_SWITCHES.NEWSLETTER && (
              <Fragment>
                <h2>Stay in the Loop</h2>

                <SignupForm />
              </Fragment>
            )}

            <div className={blogPostStyles.footerSocialLinks}>
              <SocialLinks />
            </div>
          </footer>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
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
