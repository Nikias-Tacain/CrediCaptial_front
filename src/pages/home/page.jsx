import React from 'react'
import Header from '../../layout/Header'
import Slide from './components/Slide';
import style from './Home.module.css'
import CardAuth from './components/Cardauth';

const Home = () => {
  return (
    <>
      <Header />
      <Slide />
      <CardAuth />
    </>
  )
}

export default Home;