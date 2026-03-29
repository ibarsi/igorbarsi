import React from 'react';

import { Navigation } from '../Navigation';
import { SocialLinks } from '../SocialLinks';

import * as footerStyles from './footer.module.css';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.inner}>
        <div className={footerStyles.copyBlock}>
          <p className={footerStyles.kicker}>
            Built for writing that ages well.
          </p>
          <p className={footerStyles.copywrite}>
            © {year} Igor Barsi. All rights reserved.
          </p>
        </div>

        <nav className={footerStyles.navigation} aria-label="Footer">
          <Navigation variant="inverse" />
        </nav>

        <div className={footerStyles.social}>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
