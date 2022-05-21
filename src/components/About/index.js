import React from "react";
import {
  AboutSection,
  Aboutinfo,
  AboutImage,
  AboutInfoDir,
  AboutInfoDesc,
} from "./Style.js";

const About = () => {
  return (
    <AboutSection id="about-section">
      {/* <AboutSectionOverlay /> */}
      <AboutImage />
      <Aboutinfo>
        <AboutInfoDir>Creative Front End Developer</AboutInfoDir>
        <AboutInfoDesc>
          I am a professional ,Front End Developer Proficient in building and
          developing modern and responsive websites in the Software industry.
          Let us work together.
        </AboutInfoDesc>
      </Aboutinfo>
    </AboutSection>
  );
};

export default About;
