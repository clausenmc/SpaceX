import React from 'react';
import '../assets/styles/components/Container.scss';

const Container = ({ children }) => (
  <section className='carousel'>
    <div>
      {children}
    </div>
  </section>

);

export default Container;
