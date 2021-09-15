import React from 'react';
import { Navigation, NavigationLink } from '../Navigation';
import { FEATURE_SWITCHES } from '../../config';

import * as headerStyles from './header.module.css';

export const Header = () => (
  <header>
    <nav className={headerStyles.container}>
      <h1 className={headerStyles.left}>IGOR BARSI</h1>

      <div className={headerStyles.middle}>
        <Navigation />
      </div>

      <div className={headerStyles.right}>
        {FEATURE_SWITCHES.NEWSLETTER && (
          <NavigationLink to="/newsletter">Free Subscription</NavigationLink>
        )}
      </div>
    </nav>

    <hr />
  </header>
);
