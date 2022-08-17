import React from 'react'
import Meta from './Meta'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
    </>
  )
}

export default Layout