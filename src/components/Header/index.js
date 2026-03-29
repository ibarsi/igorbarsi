import React from 'react';
import { Link } from 'gatsby';
import { Navigation, NavigationLink } from '../Navigation';
import { FEATURE_SWITCHES } from '../../config';

import * as headerStyles from './header.module.css';

export const Header = () => (
  <header className={headerStyles.shell}>
    <nav className={headerStyles.container} aria-label="Primary">
      <Link to="/" className={headerStyles.brand}>
        <span className={headerStyles.brandName}>Igor Barsi</span>
        <span className={headerStyles.brandTagline}>
          Engineering, writing, and leadership
        </span>
      </Link>

      <div className={headerStyles.navigation}>
        <Navigation />
      </div>

      <div className={headerStyles.action}>
        {FEATURE_SWITCHES.NEWSLETTER && (
          <NavigationLink to="/newsletter">Subscribe</NavigationLink>
        )}
      </div>
    </nav>
  </header>
);
