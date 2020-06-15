import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import PropTypes from 'prop-types';
import { fetchDestinationsRequest } from '../../features/destinations';
import { useDispatch } from 'react-redux';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDestinationsRequest());
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
