import React from 'react';

import Navigation from '../Navigation';

import './header.css';

const Header = () => <header className="header">
    <h1 className='header__left'>
        IGOR BARSI
    </h1>

    <Navigation className='header__middle' />

    <div className='header__right'></div>
</header>;

export default Header;
