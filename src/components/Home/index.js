import React from "react";
import {
  HomeInformation,
  HomeInfo,
  HomeSection,
  HomeTitle,
  Homedesc,
  HomeBtn,
  Span,
} from "./Style.js";

const Home = ({ aboutSectionRef }) => {
  return (
    <HomeSection>
      <div className="container">
        <HomeInformation>
          <HomeTitle>Monaf Daod</HomeTitle>
          <HomeInfo>Front End Developer</HomeInfo>
          {/* <Homedesc>
            I am a professional <Span>Front End Developer</Span>. Proficient in
            building and developing modern and responsive websites in the
            software industry. Let us work together. Thank you.
          </Homedesc> */}
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
      </div>
    </HomeSection>
  );
};

export default Home;
