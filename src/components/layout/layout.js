import React from 'react';
import { Block, Hero } from 'react-bulma-components';
import Navbar from './components/navbar';
import Footer from './components/footer';

const Layout = ({ children }) => {
  return (
    <>
      <Hero color="brand">
        <Hero.Header>
          <Navbar />
        </Hero.Header>
      </Hero>
      <Block style={{ flex: 1 }}>{children}</Block>
      <Footer />
    </>
  );
};

export default Layout;
