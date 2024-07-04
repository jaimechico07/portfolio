import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import NavBar from '../components/NavBar/NavBar';
import Tecnology from './Tecnology/Tecnology';
import Myproject from './Myprojects/Myproject';
import Contact from './Contact/Contact';
import AOS from 'aos';
import Aboutme from './Aboutme/Aboutme';

import 'aos/dist/aos.css';

const Home = () => {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div className="absolute top-0 z-[10] w-full h-auto">
      <NavBar></NavBar>
        <Hero></Hero>
        <Aboutme></Aboutme>
        <Myproject></Myproject>
        <Tecnology></Tecnology>

        <Contact></Contact>
      <div className="bg-hero-primary bg absolute inset-x-0 inset-y-0 -z-20 bg-fixed bg-[length:90px] grayscale"></div>
      <div className="bg-hero-secondary bg absolute inset-x-0 inset-y-0 -z-20  bg-fixed  bg-cover grayscale opacity-10"></div>
    </div>
  );
};

export default Home;
