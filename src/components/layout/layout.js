import React from 'react';
import { Hero } from 'react-bulma-components';
import Navbar from './components/navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Hero color="brand">
        <Hero.Header>
          <Navbar />
        </Hero.Header>
      </Hero>
      {children}
    </>
  );
};

export default Layout;
