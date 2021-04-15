import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Link = ({ to, ...props }) => {
  const { lang } = useParams();
  return <NavLink to={`/${lang}${to}`} {...props} />;
};

export default Link;
