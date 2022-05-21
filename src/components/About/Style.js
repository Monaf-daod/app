import styled from "styled-components";
import aboutImageSrc from "../../assets/backgrounds/cover3.webp";

export const AboutSection = styled.div`
  height: 100vh;
  padding: 1rem 0.4rem;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 320px) and (max-width: 767px) {
    min-height: 100vh;
    height: fit-content;
    flex-direction: column;
  }
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
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  padding-top: 5rem;
  z-index: 1;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 95%;
    align-items: center;
  }
`;

export const AboutImage = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: url(${aboutImageSrc});
  background-size: cover;
  background-position: center;
  z-index: 0;
  overflow: hidden;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 200px;
    height: 200px;
  }
  ::before {
    content: "";
    position: absolute;
    width: 15%;
    height: 15%;
    top: 0%;
    left: 20%;
    z-index: -1;
    border-radius: 50%;
    background: var(--second-font-color);
    animation: floatTop infinite 2s alternate linear;
    @keyframes floatTop {
      0% {
        transform: translate(10%, 5%);
      }
      100% {
        transform: translate(15%, 30%);
      }
    }
  }
  ::after {
    content: "";
    position: absolute;
    width: 25%;
    height: 25%;
    bottom: 0%;
    right: 20%;
    z-index: -1;
    border-radius: 50%;
    background: var(--second-font-color);
    animation: floatBottom infinite 2s alternate linear;
    @keyframes floatBottom {
      0% {
        transform: translate(10%, -5%);
      }
      100% {
        transform: translate(15%, 20%);
      }
    }
  }
`;

export const AboutInfoDir = styled.h4`
  font-size: 2.2rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0.2rem;
  text-align: center;
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
