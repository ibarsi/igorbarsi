import React from 'react';
import Link from 'gatsby-link';

import Navigation from '../Navigation'

import './header.css';

const Header = () => <header>
    <nav className="header">
        <h1 className='header__left'>
            IGOR BARSI
        </h1>

        <div className="header__middle">
            <Navigation />
        </div>

        <div className='header__right'>
            <Link to='/newsletter'
                className='nav__link'>
                Free Newsletter
            </Link>
        </div>
    </nav>

    <hr />
</header>;

export default Header;
