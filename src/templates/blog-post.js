import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../layouts';
import { SignupForm } from '../components/SignupForm';
import { SocialLinks } from '../components/SocialLinks';
import { Seo } from '../components/Seo';
import { buildPageTitle, formatPostDateWithYear } from '../utils';
import { FEATURE_SWITCHES } from '../config';

import * as blogPostStyles from './blog-post.module.css';

const BlogPost = ({ data, location }) => {
  const post = data.markdownRemark;

  return (
    <Layout location={location}>
      <article>
        <div className={`content-container ${blogPostStyles.shell}`}>
          <header className={blogPostStyles.header}>
            <p className={blogPostStyles.eyebrow}>Article</p>
            <h1 className={blogPostStyles.headerHeadline}>
              {post.frontmatter.title}
            </h1>

            <span className={blogPostStyles.headerByline}>
              By Igor Barsi <span className="separator" />{' '}
              {formatPostDateWithYear(post.frontmatter.date)}
            </span>
          </header>

          <div
            className={`${blogPostStyles.markdown} ${blogPostStyles.content}`}
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
  query BlogPostByPath($postPath: String!) {
    markdownRemark(frontmatter: { path: { eq: $postPath } }) {
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

export const Head = ({ data, location }) => {
  const post = data.markdownRemark;

  return (
    <Seo
      description={post.excerpt}
      pathname={location.pathname}
      title={buildPageTitle(post.frontmatter.title)}
      type="article"
    />
  );
};
