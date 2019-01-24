import React from 'react';
import moment from 'moment';

import { Navigation } from '../Navigation';

import './footer.css';

export const Footer = () => (
  <footer className="footer">
    <nav>
      <Navigation />
    </nav>

    <div className="footer__copywrite">
      © {moment().year()} Igor Barsi. All rights reserved.
    </div>
  </footer>
);
