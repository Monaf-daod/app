import React from "react";
import Particles from "react-tsparticles";
import {
  HomeInformation,
  HomeInfo,
  HomeSection,
  HomeTitle,
  HomeBtn,
  // Avatar,
  OverLay,
} from "./Style.js";
// import avatar from "../../assets/profile/avatar1.jpg";

const Home = ({ aboutSectionRef }) => {
  return (
    <HomeSection>
      <OverLay />
      <HomeInformation>
        {/* <Avatar src={avatar} /> */}
        <HomeTitle>Monaf Daod</HomeTitle>
        <HomeInfo>Front End Developer</HomeInfo>
        <HomeBtn
          onClick={() =>
            window.scrollTo({
              top: aboutSectionRef.current.offsetTop,
              behavior: "smooth",
            })
          }
        >
          Let's Begin
        </HomeBtn>
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
