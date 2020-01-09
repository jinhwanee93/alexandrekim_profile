import React from 'react';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

import {
  GlobalStyle,
} from './index.style';

export default function Index() {
  return(
    <div>
      <GlobalStyle/>
      <Header/>
      <Hero/>
      <About/>
      <Footer/>
    </div>
  )
}
