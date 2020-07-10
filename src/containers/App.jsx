import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Container from '../components/Container';
import Paginator from '../components/Paginator';

import '../assets/styles/App.scss';

const App = () => {
  return (
    <div className='App'>

      <Header />

      <Categories title='Latest Launches'>
        <Container>
          <Paginator />
        </Container>
      </Categories>

    </div>
  );
};

export default App;
