import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import UserSection from '../../UserSection';

function Gallery() {
  return (
    <>
      <UserSection />
      {/* <HeroSection {...homeObjOne} /> */}
      {/* <HeroSection {...homeObjThree} /> */}
    </>
  );
}

export default Gallery;