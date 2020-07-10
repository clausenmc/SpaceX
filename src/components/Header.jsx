import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/space-x-logo.png';

const Header = () => (
  <header className='header'>
    <img className='header__img' src={logo} alt='Space X' />
  </header>

);

export default Header;
