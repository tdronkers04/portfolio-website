/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Main from '../components/Main';
import Seymour from '../components/Seymour';
import Projects from '../components/Projects';
import HomeButton from '../components/HomeButton';
import Bio from '../components/Bio';

export default function Home() {
  return (
    <>
      <Main />
      <Seymour />
      <Projects />
      <Bio />
      <HomeButton />
    </>
  );
}
