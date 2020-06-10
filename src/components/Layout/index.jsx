import React from 'react';
import './styles.scss';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div className="site-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
