import React from 'react';
import PropTypes from 'prop-types';
import Meta from './Meta';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
