import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import moment from 'moment';
import { graphql } from 'gatsby';

import { Layout } from '../../layouts';
import { buildPageTitle } from '../../utils';

import './blog.css';

const groupPostsByYear = posts =>
  posts.reduce((acc, { node: post } = {}) => {
    if (!post || !post.frontmatter.title || !post.frontmatter.date) {
      return acc;
    }

    const year = moment(post.frontmatter.date).year();

    return { ...acc, [year]: [...(acc[year] || []), post] };
  }, {});

const Blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  const title = buildPageTitle('Blog');
  const description =
    'Looking for the best blog posts to read? Browse this list of interesting posts on software engineering, leadership, behavioural psychology, productivity and more.';

  const groupedPosts = groupPostsByYear(posts);

  return (
    <Layout location={location}>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
      </Helmet>

      <div className="content-container blog">
      <h1>All Posts By Date</h1>

      <p className="paragraph">
        Take a look below to browse all of my posts by date and title. They are
        listed from newest to oldest.
      </p>

      <hr />

      {Object.keys(groupedPosts)
        .sort((previous, next) => next - previous)
        .map(key => {
          const postsForYear = groupedPosts[key];

          return (
            <div key={key}>
              <h2>{key}</h2>

              <ul className="blog__list">
                {postsForYear.map(post => (
                  <li key={post.id} className="blog__list-item">
                    <BlogListItem {...post} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

const BlogListItem = ({ frontmatter }) => {
  const date = moment(frontmatter.date, 'MM-DD-YYYY').format('MMMM Do');

  return (
    <div className="paragraph blog__list-item-content">
      <span className="blog__list-item-date">{date}</span>

      <Link to={frontmatter.path} className="blog__list-item-link">
        {frontmatter.title}
      </Link>
    </div>
  );
};

export default Blog;

export const blogPostsFragment = graphql`
  fragment BlogPostsFragment on Query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
