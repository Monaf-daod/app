import React, { useState } from "react";
import Typist from "react-text-typist";
import ParticleEffectButton from "react-particle-effect-button";
import {
  HomeInformation,
  HomeInfo,
  HomeSection,
  HomeTitle,
  HomeBtn,
  OverLay,
  AnimationOverLay,
} from "./Style.js";

const Home = () => {
  const [ishidden, setIsHidden] = useState(false);

  const handleScroll = () => {
    setIsHidden(true);
    setTimeout(() => {
      document
        .getElementById("about-section")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }, 1000);
  };
  return (
    <HomeSection>
      <OverLay />
      <AnimationOverLay />
      <HomeInformation>
        <HomeTitle>Monaf Daod</HomeTitle>
        <HomeInfo>
          <Typist
            sentences={["Front End Developer", "React Js & Next Js"]}
            cursorColor="var(--primary-font-color)"
            typingSpeed={100}
            loop={true}
          />
        </HomeInfo>
        <ParticleEffectButton
          color="#ffffff"
          hidden={ishidden}
          onComplete={() => setIsHidden(false)}
        >
          <HomeBtn onClick={handleScroll}>Let's Begin</HomeBtn>
        </ParticleEffectButton>
      </HomeInformation>
    </HomeSection>
  );
};

export default Home;
