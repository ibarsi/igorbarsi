import React from 'react';
import moment from 'moment';

import { Navigation } from '../Navigation';

import footerStyles from './footer.module.css';

export const Footer = () => (
  <footer className={footerStyles.container}>
    <nav>
      <Navigation />
    </nav>

    <div className={footerStyles.copywrite}>
      © {moment().year()} Igor Barsi. All rights reserved.
    </div>
  </footer>
);
