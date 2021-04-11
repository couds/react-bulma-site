import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

Layout.Navbar = Navbar;
Layout.Footer = Footer;

export default Layout;
