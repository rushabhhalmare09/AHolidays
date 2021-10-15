import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import UserSection from '../../UserSection';

function AboutUs() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <footer />
    </>
  );
}

export default AboutUs;