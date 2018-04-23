import React from 'react';
import Link from 'gatsby-link';

import './navigation.css';

const Navigation = () => <div>
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
</div>;

export default Navigation;
