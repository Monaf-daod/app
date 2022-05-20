import React, { Suspense, lazy } from "react";
import { MainContainer } from "./style";
import Navbar from "./../Navbar";
import Home from "./../Home";
const About = lazy(() => import("./../About"));
const Skills = lazy(() => import("../Skills"));
const Work = lazy(() => import("./../Work"));
const Socialmedia = lazy(() => import("./../Socialmedia"));
const Footer = lazy(() => import("./../Footer"));

const Index = () => {
  return (
    <MainContainer>
      <Navbar />
      <Home />
      <Suspense fallback={<div />}>
        <About />
      </Suspense>
      <Suspense fallback={<div />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div />}>
        <Work />
      </Suspense>
      <Suspense fallback={<div />}>
        <Socialmedia />
      </Suspense>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </MainContainer>
  );
};

export default Index;
