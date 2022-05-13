import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "react-feather";

export const WorkSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 2rem;
  padding-top: 5rem;
  @media (min-width: 320px) and (max-width: 1024px) {
    h2 {
      align-self: center;
    }
  }
`;
export const Worktitle = styled.h2`
  font-size: 2rem;
  color: var(--primary-font-color);
  align-self: center;
  @media (min-width: 320px) and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;
export const WorkSwiperContainer = styled.div`
  display: block;
  margin: 0rem auto;
  margin-top: 1rem;
  width: 90%;
  overflow: hidden;
  @media (min-width: 320px) and (max-width: 499px) {
    width: 99%;
  }
`;
export const Parttitle = styled.h4`
  font-size: 1.4rem;
  color: var(--primary-font-color);
  @media (min-width: 320px) and (max-width: 1150px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1440px) {
    font-size: 1.5rem;
  }
`;
export const TechniquesTitle = styled.h6`
  font-size: 1rem;
  font-weight: 400;
  color: var(--third-font-color);
  @media (min-width: 1440px) {
    font-size: 1.3rem;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;
export const TechniquesIconsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;
export const TechniqueImage = styled.img`
  width: 35px;
  height: 35px;
  margin: 0.3rem;
`;
export const Partdesc = styled.p`
  font-size: 1rem;
  color: var(--second-font-color);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  min-height: 2.5rem;
   line-height: 1.3rem,
  opacity: 1;
  max-width:90%;
  transition: opacity 0.7s ease-in-out;
   @media (min-width: 320px) and (max-width: 767px) {
    min-height: 4rem;
   line-height: 1rem,
  }
`;
export const SeeMoreButton = styled.button`
  background: var(--main-background-color);
  padding: 0.3rem 1.2rem;
  margin-top: 2rem;
  color: var(--primary-font-color);
  font-size: 1rem;
  font-weight: 500;
  border: 2px solid var(--primary-font-color);
  border-radius: 20px 0px 20px 0px;
  :hover {
    background: var(--primary-font-color);
    color: var(--main-background-color);
  }
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: 0.5rem;
  }
`;

/**---------------------New Design----------------------- */
export const WorkSlideContainer = styled.div`
  background-color: var(--main-background-color);
  height: 420px;
  display: flex;
  flex-direction: row;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
  }
`;
export const WorkSliderButtonsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const WorkDetailsSection = styled.div`
  width: 50%;
  height: 100%;
  background-color: var(--main-background-color);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    height: 50%;
  }
`;
export const WorkImagesSection = styled.div`
  width: 50%;
  height: 100%;
  background-color: var(--main-background-color);
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    height: 50%;
  }
`;
export const WorkImageItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(30% 0, 100% 0%, 100% 100%, 16% 100%);
  @media (min-width: 320px) and (max-width: 767px) {
    clip-path: unset;
  }
`;
export const WorkInnerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  object-position: center;
`;
export const ChevronLeftButton = styled(ChevronLeft)`
  color: var(--main-background-color);
  background: var(--primary-font-color);
  cursor: pointer;
  opacity: 0.3;
  margin: 0rem;
  :hover {
    opacity: 1;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    margin: 0rem 0.22rem;
  }
`;
export const ChevronRightButton = styled(ChevronRight)`
  color: var(--main-background-color);
  background: var(--primary-font-color);
  cursor: pointer;
  opacity: 0.3;
  margin: 0rem;
  :hover {
    opacity: 1;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    margin: 0rem 0.22rem;
  }
`;
