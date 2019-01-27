import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';

import blogListStyles from './blog-list.module.css';

export const BlogListItem = ({ frontmatter }) => {
  const date = moment(frontmatter.date, 'MM-DD-YYYY').format('MMMM Do');

  return (
    <li className={blogListStyles.item}>
      <div className={`paragraph ${blogListStyles.itemContent}`}>
        <span className={blogListStyles.itemDate}>{date}</span>

        <Link to={frontmatter.path} className={blogListStyles.itemLink}>
          {frontmatter.title}
        </Link>
      </div>
    </li>
  );
};

export const BlogList = ({ children }) => (
  <ul className={blogListStyles.container}>{children}</ul>
);
