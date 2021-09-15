import React from 'react';
import Link from 'gatsby-link';

import * as navigationStyles from './navigation.module.css';

export const NavigationLink = ({ children, to }) => (
  <Link to={to} className={navigationStyles.link}>
    {children}
  </Link>
);

export const Navigation = () => (
  <div>
    <ul className={navigationStyles.list}>
      <li className={navigationStyles.listItem}>
        <NavigationLink to="/">Home</NavigationLink>
      </li>
      <li className={navigationStyles.listItem}>
        <NavigationLink to="/blog">Blog</NavigationLink>
      </li>
    </ul>
  </div>
);
