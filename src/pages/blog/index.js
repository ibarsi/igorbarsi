import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../../layouts';
import { BlogList, BlogListItem } from '../../components/BlogList';
import { Seo } from '../../components/Seo';
import { buildPageTitle, getPostYear } from '../../utils';

import * as blogStyles from './blog.module.css';

const title = buildPageTitle('Blog');
const description =
  'Looking for the best blog posts to read? Browse this list of interesting posts on software engineering, leadership, behavioural psychology, productivity and more.';

const groupPostsByYear = (posts) =>
  posts.reduce((acc, { node: post } = {}) => {
    if (!post || !post.frontmatter.title || !post.frontmatter.date) {
      return acc;
    }

    const year = getPostYear(post.frontmatter.date);

    if (!year) {
      return acc;
    }

    return { ...acc, [year]: [...(acc[year] || []), post] };
  }, {});

const Blog = ({ data, location }) => {
  const { edges: posts } = data.allMarkdownRemark;

  const groupedPosts = groupPostsByYear(posts);

  return (
    <Layout location={location}>
      <div className={blogStyles.page}>
        <section className={blogStyles.hero}>
          <p className={blogStyles.eyebrow}>Archive</p>
          <h1 className={blogStyles.title}>
            Writing on engineering, leadership, and better delivery.
          </h1>
          <p className="paragraph paragraph--intro">
            Browse the full archive by year. Posts are ordered from newest to
            oldest so the latest thinking stays easy to find.
          </p>
        </section>

        {Object.keys(groupedPosts)
          .sort((previous, next) => next - previous)
          .map((key) => {
            const postsForYear = groupedPosts[key];

            return (
              <section key={key} className={blogStyles.yearSection}>
                <div className={blogStyles.yearHeader}>
                  <p className={blogStyles.yearLabel}>Year</p>
                  <h2 className={blogStyles.yearTitle}>{key}</h2>
                </div>

                <BlogList>
                  {postsForYear.map((post) => (
                    <BlogListItem key={post.id} {...post} />
                  ))}
                </BlogList>
              </section>
            );
          })}
      </div>
    </Layout>
  );
};

export default Blog;

export const blogPostsFragment = graphql`
  fragment BlogPostsFragment on Query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`;

export const query = graphql`
  query BlogsQuery {
    ...BlogPostsFragment
  }
`;

export const Head = ({ location }) => (
  <Seo description={description} pathname={location.pathname} title={title} />
);
