import React from 'react';
import Header from '../header/Header';
import Pied from '../footer/Pied';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Pied />
    </div>
  );
};

export default Layout;
