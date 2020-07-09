import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Container from '../components/Container';
import Item from '../components/Item';
import Footer from '../components/Footer';
import SpaceXService from '../hooks/SpaceXService';
import LaunchesComponent from '../components/LaunchesComponent/LaunchesComponent';

import '../assets/styles/App.scss';
const API = 'http://localhost:3000/data';

const App = () => {
  return (
    <div className='App'>

      <Header />
      <Search />

      <Categories title='Latest Launches'>
        <Container>
          <LaunchesComponent />
        </Container>
      </Categories>
      <Footer />

    </div>
  );
};

export default App;
