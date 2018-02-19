import React from 'react';
import Link from 'gatsby-link';

import './navigation.css';

const Navigation = () => <nav className="header__middle">
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
</nav>;

export default Navigation;
