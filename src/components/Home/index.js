import React, { useState } from "react";
import Particles from "react-tsparticles";
import ParticleEffectButton from "react-particle-effect-button";
import {
  HomeInformation,
  HomeInfo,
  HomeSection,
  HomeTitle,
  HomeBtn,
  ImageBackground,
  // Avatar,
  OverLay,
} from "./Style.js";
import homeBackgroundSrc from "../../assets/backgrounds/cover6.jpg";
// import avatar from "../../assets/profile/avatar1.jpg";
import Typist from "react-text-typist";

const Home = ({ aboutSectionRef }) => {
  const [ishidden, setIsHidden] = useState(false);

  const handleScroll = () => {
    setIsHidden(true);
    setTimeout(() => {
      window.scrollTo({
        top: aboutSectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }, 1000);
  };
  return (
    <HomeSection>
      <OverLay />
      <ImageBackground src={homeBackgroundSrc} alt="backgroundImage" />
      <HomeInformation>
        {/* <Avatar src={avatar} /> */}
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
      <Particles
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
                enable: true,
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
      />
    </HomeSection>
  );
};

export default Home;
