import React, { useState } from 'react';
import Paginator from './Paginator';
import Company from './Company';
import '../assets/styles/components/Container.scss';
import logo from '../assets/static/space-x-logo.png';

const Container = () => {

  const [activeTab, setActiveTab] = useState('launches');

  return (
    <div>
      <div className='navbar'>
        <header className='header'>
          <img className='header__img' src={logo} alt='Space X' />
        </header>
        <nav className='menu'>
          <ul>
            <li onClick={()=>{setActiveTab('launches')}}>Launches</li>
            <li onClick={()=>{setActiveTab('company')}}>Company</li>
          </ul>
        </nav>
      </div>

      <div className='carousel__container'>
        {activeTab === 'launches' ? <Paginator /> : ''}
        {activeTab === 'company' ? <Company /> : ''}
      </div>
    </div>
  );
};

export default Container;
