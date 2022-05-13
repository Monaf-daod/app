import React from "react";
import {
  AboutSection,
  Aboutinfo,
  AboutSectionOverlay,
  AboutInfoDir,
  AboutInfoDesc,
} from "./Style.js";

const About = ({ aboutRef }) => {
  return (
    <AboutSection ref={aboutRef}>
      <AboutSectionOverlay />
      <Aboutinfo data-aos="zoom-out">
        <AboutInfoDir data-aos="fade-left" data-aos-duration="1000">
          Creative Front End Developer
        </AboutInfoDir>
        <AboutInfoDesc data-aos="fade-right" data-aos-duration="1000">
          I am a professional ,Front End Developer Proficient in building and
          developing modern and responsive websites in the Software industry.
          Let us work together.
        </AboutInfoDesc>
      </Aboutinfo>
    </AboutSection>
  );
};

export default About;
