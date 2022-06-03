import React from "react";
import Tada from "react-reveal/Tada";
import Pulse from "react-reveal/Pulse";
import {
  AboutSection,
  Aboutinfo,
  AboutImage,
  AboutInfoDir,
  AboutInfoDesc,
  Span,
} from "./Style.js";

const About = () => {
  return (
    <Pulse>
      <AboutSection id="about-section">
        {/* <AboutSectionOverlay /> */}
        <AboutImage />
        <Aboutinfo>
          <Tada>
            <AboutInfoDir>
              <Span>Creative</Span> Front End Developer
            </AboutInfoDir>
          </Tada>
          <AboutInfoDesc>
            I am a professional, Front End Developer Proficient in building and
            developing modern and responsive websites in the Software industry.
            Let us work together.
          </AboutInfoDesc>
        </Aboutinfo>
      </AboutSection>
    </Pulse>
  );
};

export default About;
