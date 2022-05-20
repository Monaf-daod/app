import React, { useState } from "react";
import Typist from "react-text-typist";
// import Particles from "react-tsparticles";
import ParticleEffectButton from "react-particle-effect-button";
import {
  HomeInformation,
  HomeInfo,
  HomeSection,
  HomeTitle,
  HomeBtn,
  OverLay,
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
          color="var(--primary-font-color)"
          hidden={ishidden}
          onComplete={() => setIsHidden(false)}
        >
          <HomeBtn onClick={handleScroll}>Let's Begin</HomeBtn>
        </ParticleEffectButton>
      </HomeInformation>
      {/* <Particles
        options={{
          style: {
            position: "absolute",
            opacity: "0.8",
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "bubble",
              },
              onClick: {
                enable: false,
                mode: "push",
              },
            },
            modes: {
              bubble: {
                opacity: 0.8,
                size: 10,
                color: {
                  value: "#C2D7ED",
                },
              },
            },
          },
          particles: {
            links: {
              enable: true,
            },
            move: {
              enable: true,
            },
            size: {
              value: 2,
            },
          },
        }}
      /> */}
    </HomeSection>
  );
};

export default Home;
