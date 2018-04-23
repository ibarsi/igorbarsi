import React from 'react';
import moment from 'moment';

import Navigation from '../Navigation';

import './footer.css';

const Footer = () => <footer className='footer'>
    <nav>
        <Navigation />
    </nav>

    <div className='footer__copywrite'>
        <a href='mailto:ibarsi92@gmail.com'
            className='footer__copywrite-link'>
            Contact
        </a>

        <span className='separator'></span>

        Copywrite ©{ moment().year() }
    </div>
</footer>;

export default Footer;
