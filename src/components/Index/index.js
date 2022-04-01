import React, { Component, useRef } from "react";
import About from "./../About";
import Navbar from "./../Navbar";
import Home from "./../Home";
import Portfolio from "./../Portfolio";
import Profile from "./../Profile";
import Work from "./../Work";
import Socialmedia from "./../Socialmedia";
import Footer from "./../Footer";
import { MianContainer } from "./style";

const Index = () => {
  const CONTACT_SECTION = useRef();
  const WORK_SECTION = useRef();
  const ABOUT_SECTION = useRef();

  return (
    <MianContainer>
      <Navbar sections={[ABOUT_SECTION, WORK_SECTION, CONTACT_SECTION]} />
      <Home aboutSectionRef={ABOUT_SECTION} />
      <Work workRef={WORK_SECTION} />
      <About aboutRef={ABOUT_SECTION} />
      {/* <Portfolio /> */}
      {/* <Profile />
        <About />
  <Socialmedia />*/}

      <Footer />
    </MianContainer>
  );
};

export default Index;
