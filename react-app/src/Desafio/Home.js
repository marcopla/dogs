import React from 'react';
import Header from './Header';
import Titulo from './Titulo';

const Home = () => {
  return (
    <>
      <Header />
      <Titulo titulo="Home" />
      <p>Esta é a home do site</p>
    </>
  );
};

export default Home;
