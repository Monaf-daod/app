import styled from "styled-components";

export const AboutSection = styled.div`
  height: 100vh;
  background: url("images/aboutSection.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  z-index: 0;
`;

export const AboutSectionOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
`;

export const Aboutinfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  padding-top: 5rem;
  z-index: 1;
  @media (min-width: 320px) and (max-width: 1024px) {
    align-items: center;
  }
`;

export const AboutInfoDir = styled.h4`
  font-size: 2.2rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0.2rem;
  text-align: center;
  /* text-shadow: 1px 0px 1px var(--second-font-color),
    0px 1px 1px var(--second-font-color), 2px 1px 1px var(--second-font-color),
    1px 2px 1px var(--second-font-color), 3px 2px 1px var(--second-font-color),
    2px 3px 1px var(--second-font-color); */
`;

export const AboutInfoDesc = styled.p`
  color: #fff;
  width: 65%;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  margin-top: 0.2rem;
  line-height: 1.8;
  @media (min-width: 320px) and (max-width: 991px) {
    width: 90%;
    font-size: 1rem;
  }
`;

export const Span = styled.span`
  color: var(--second-font-color);
`;
