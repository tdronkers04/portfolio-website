import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: 'dronkers.dev',
  keywords: 'web development, programming, portfolio',
  description: 'Dev Portfolio for Tim Dronkers',
};

Meta.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
};

export default Meta;
