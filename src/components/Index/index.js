import React, { useRef, useEffect } from "react";
import About from "./../About";
import Navbar from "./../Navbar";
import Home from "./../Home";
import Skills from "../Skills";
import Work from "./../Work";
import Socialmedia from "./../Socialmedia";
import Footer from "./../Footer";
import { MainContainer } from "./style";
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  const CONTACT_SECTION = useRef();
  const WORK_SECTION = useRef();
  const SKILLS_SECTION = useRef();
  const ABOUT_SECTION = useRef();

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 200,
      duration: 600,
      easing: "ease-in-cubic",
      // delay: 200,
    });
  }, []);
  return (
    <MainContainer>
      <Navbar
        sections={[
          ABOUT_SECTION,
          WORK_SECTION,
          CONTACT_SECTION,
          SKILLS_SECTION,
        ]}
      />
      <Home aboutSectionRef={ABOUT_SECTION} />
      <About aboutRef={ABOUT_SECTION} />
      <Skills skillsRef={SKILLS_SECTION} />
      <Work workRef={WORK_SECTION} />
      <Socialmedia contactRef={CONTACT_SECTION} />
      {/* <Footer /> */}
    </MainContainer>
  );
};

export default Index;
