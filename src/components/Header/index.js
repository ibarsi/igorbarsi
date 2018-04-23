import React from 'react';
import Link from 'gatsby-link';

import './header.css';

const Header = () => <header>
    <nav className="header">
        <h1 className='header__left'>
            IGOR BARSI
        </h1>

        <div className="header__middle">
            <ul className='nav__list'>
                <li className='nav__list-item'>
                    <Link to='/'
                        className='nav__link'>
                        Home
                    </Link>
                </li>
                <li className='nav__list-item'>
                    <Link to='/blog'
                        className='nav__link'>
                        Blog
                    </Link>
                </li>
            </ul>
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
