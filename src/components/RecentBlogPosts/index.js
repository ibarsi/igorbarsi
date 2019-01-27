import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { BlogList, BlogListItem } from '../BlogList';

import recentBlogPostStyles from './recent-blog-posts.module.css';

export const RecentBlogPosts = ({ limit }) => (
  <StaticQuery
    query={graphql`
      query RecentBlogPostsQuery {
        ...BlogPostsFragment
      }
    `}
    render={data => {
      const { edges: posts } = data.allMarkdownRemark;

      return (
        <div className={recentBlogPostStyles.container}>
          <BlogList>
            {posts.slice(0, limit || posts.length).map(({ node }) => (
              <BlogListItem key={node.id} {...node} />
            ))}
          </BlogList>
        </div>
      );
    }}
  />
);
