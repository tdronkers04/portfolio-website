import React from 'react';
import Meta from './Meta';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
    </>
  );
}

export default Layout;
