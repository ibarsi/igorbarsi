import React from 'react';
import { Link } from 'gatsby';

import * as navigationStyles from './navigation.module.css';

export const NavigationLink = ({ children, to, variant }) => (
  <Link
    to={to}
    activeClassName={navigationStyles.linkActive}
    className={`${navigationStyles.link} ${
      variant === 'inverse' ? navigationStyles.linkInverse : ''
    }`}
  >
    {children}
  </Link>
);

export const Navigation = ({ variant }) => (
  <ul className={navigationStyles.list}>
    <li className={navigationStyles.listItem}>
      <NavigationLink to="/" variant={variant}>
        Home
      </NavigationLink>
    </li>
    <li className={navigationStyles.listItem}>
      <NavigationLink to="/blog" variant={variant}>
        Blog
      </NavigationLink>
    </li>
  </ul>
);
