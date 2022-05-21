import styled from "styled-components";
import homeBackgroundSrc from "../../assets/backgrounds/cover2.jpg";

export const HomeSection = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 0;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: url(${homeBackgroundSrc});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    transform: rotateY(180deg);
  }
  @media (min-width: 320px) and (max-width: 599px) {
    justify-content: center;
  }
`;

export const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 1;
`;
export const AnimationOverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
  ::before {
    content: "";
    position: absolute;
    top: 8%;
    left: -6%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: var(--second-font-color);
    animation: floatLeft infinite 2s alternate linear;
  }
  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: var(--second-font-color);
    transform: translate(110%, -50%);
    animation: floatRight infinite 2s alternate linear;
  }
  @keyframes floatRight {
    0% {
      transform: translate(125%, -50%);
    }
    100% {
      transform: translate(100%, -50%);
    }
  }
  @keyframes floatLeft {
    0% {
      transform: translateX(-20%);
    }
    100% {
      transform: translateX(20%);
    }
  }
`;

export const HomeInformation = styled.div`
  padding: 3rem;
  margin: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 3;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

export const HomeTitle = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  user-select: none;
  color: #ffffff;
  @media (min-width: 320px) and (max-width: 599px) {
    font-size: 1.9rem;
  }
`;
export const HomeInfo = styled.h4`
  font-size: 3rem;
  font-weight: 500;
  font-style: normal;
  user-select: none;
  color: var(--second-font-color);
  @media (min-width: 320px) and (max-width: 599px) {
    font-size: 1.8rem;
  }
`;

export const Homedesc = styled.p`
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  color: #fff1e1;
  font-weight: 500;
  user-select: none;
  margin-bottom: 20px;
  text-shadow: 0 1px 0 #1d3c4590, 0 2px 0 #1d3c4580, 0 3px 0 #1d3c4570,
    0 4px 0 #1d3c4560, 0 5px 0 #1d3c4550, 0 6px 1px rgba(0, 0, 0, 0.1),
    0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
    0 3px 5px rgba(0, 0, 0, 0.2);
`;

export const HomeBtn = styled.button`
  background: #ffffff;
  color:var(--primary-font-color)
  font-size: 1.2rem;
  width: 150px;
  border: 1px solid #ffffff;
  padding: 15px;
  margin-top: 10px;
  user-select: none;
  cursor: pointer;
  font-weight: 400;
  border-radius: 10px;
  :hover {
    background: transparent;
    color: #ffffff;
    border: 1px solid var(--primary-font-color);
    transition: all 0.6s ease;
  }

  @media (min-width: 320px) and (max-width: 599px) {
    font-size: 0.9rem;
    width: 120px;
  }
`;
