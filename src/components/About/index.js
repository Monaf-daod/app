import React from "react";
import {
  AboutSection,
  Aboutinfo,
  AboutInfoTitle,
  AboutInfoTitleSpan,
  AboutInfoDir,
  AboutInfoDesc,
  AboutInfoDesca,
} from "./Style.js";

const About = ({ aboutRef }) => {
  return (
    <AboutSection ref={aboutRef}>
      <div className="container">
        <Aboutinfo>
          <AboutInfoTitle>
            <AboutInfoTitleSpan>This is</AboutInfoTitleSpan> Me
          </AboutInfoTitle>
          <AboutInfoDir>Creative Director</AboutInfoDir>
          <AboutInfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{" "}
            <AboutInfoDesca href="#">explicabo</AboutInfoDesca> maxime quibusdam
            quaerat nihil aliquid aperiam deleniti, repellendus dolorum.
            Possimus nisi cupiditate ad veritatis?
          </AboutInfoDesc>
          <AboutInfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </AboutInfoDesc>
        </Aboutinfo>
      </div>
    </AboutSection>
  );
};

export default About;
