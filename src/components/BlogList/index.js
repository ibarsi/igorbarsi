import React from 'react';
import { Link } from 'gatsby';

import { formatPostDate } from '../../utils';
import * as blogListStyles from './blog-list.module.css';

export const BlogListItem = ({ frontmatter }) => {
  const date = formatPostDate(frontmatter.date);

  return (
    <li className={blogListStyles.item}>
      <Link to={frontmatter.path} className={blogListStyles.card}>
        <span className={blogListStyles.itemDate}>{date}</span>
        <span className={blogListStyles.itemTitle}>{frontmatter.title}</span>
      </Link>
    </li>
  );
};

export const BlogList = ({ children }) => (
  <ul className={blogListStyles.container}>{children}</ul>
);
