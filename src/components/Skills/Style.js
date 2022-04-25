import styled from "styled-components";
import { Row, Col } from "reactstrap";

export const SkillsMainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  perspective: 700px;
`;
export const SkillsContainer = styled(Row)`
  width: 55%;
  @media (min-width: 320px) and (max-width: 1024px) {
    width: 100%;
  }
`;
export const SkillFirstColumn = styled(Col)`
  padding: 2.3rem 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const SkillFirstColumnItem = styled.div`
  width: 140px;
  height: 140px;
  margin: 0rem 0.5rem;
  align-self: ${(props) =>
    props.position == 0 || props.position == 2 ? "flex-end" : "flex-start"};
  @media (min-width: 320px) and (max-width: 767px) {
    align-self: center;
  }
`;

export const SkillSecondColumn = styled(Col)`
  padding: 0rem 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const SkillSecondColumnItem = styled.div`
  width: 140px;
  height: 140px;
  margin: 0.8rem 0.5rem;
`;

export const SkillThirdColumn = styled(Col)`
  padding: 2.3rem 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const SkillThirdColumnItem = styled.div`
  width: 140px;
  height: 140px;
  margin: 0rem 0.5rem;
  align-self: ${(props) =>
    props.position == 0 || props.position == 2 ? "flex-start" : "flex-end"};
  @media (min-width: 320px) and (max-width: 767px) {
    align-self: center;
  }
`;

export const SkillsTitle = styled.h2`
  font-size: 2rem;
  color: var(--primary-font-color);
  align-self: center;
  @media (min-width: 320px) and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const SkillCard = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid var(--second-font-color);
  border-radius: 50%;
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.7s;
  &:hover {
    cursor: pointer;
    transform: rotateY(180deg);
  }
`;

export const FirstFace = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
`;

export const SecondFace = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  background: var(--primary-font-color);
  transform: rotateY(180deg);
`;

export const SkillCardTitle = styled.h6`
  font-size: 1.2rem;
  text-align: center;
  margin: 0.25rem;
  color: var(--primary-font-color);
  @media (min-width: 320px) and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const SkillCardImage = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: "contain";
`;
