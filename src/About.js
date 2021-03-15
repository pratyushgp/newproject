import React from 'react';
import Common from './Common';
import web from "./images/hero.png";


const About = () => {
  return (
    <>
<Common
name="We are an IT professional."  details="Now we have started vlogging on YouTube. We are an IT professional, Like travel vlogging, family vlogging, and education information vlogging, fooding vlog."
imgsrc={web} bname="Contact Now" link="/contact"/>    
</> 
  );
}

export default About;
