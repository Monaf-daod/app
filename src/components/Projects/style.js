import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 100vh;
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background: #fff1e1;
`;
export const ProjectDetailsContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 0px 5px;
  background: #1d3c45;
`;
export const ProjectCard = styled.div`
  width: 25%;
  overflow: hidden;
  float: left;
  position: relative;
  height: auto;
  padding: 0px;
  border: 1px solid #d2601a70;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: ${(props) => props.ml ?? "1%"};
  :before {
    content: "";
    width: 0%;
    height: 0%;
    visibility: hidden;
    position: absolute;
    top: 0%;
    left: 0%;
    border-top: 2px solid #d2601a;
    border-left: 2px solid #d2601a;
    border-radius: 10px;
  }
  :hover:before {
    width: 100%;
    height: 100%;
    visibility: visible;
    transition: width 0.7s ease-in, height 0.7s ease-in, visibility 0.7s ease-in;
  }
  :after {
    content: "";
    width: 0%;
    height: 0%;
    visibility: hidden;
    position: absolute;
    bottom: 0%;
    right: 0%;
    border-bottom: 2px solid #d2601a;
    border-right: 2px solid #d2601a;
    border-radius: 10px;
  }
  :hover:after {
    width: 100%;
    height: 100%;
    visibility: visible;
    transition: width 0.7s ease-in, height 0.7s ease-in, visibility 0.7s ease-in;
  }
  :hover h2 {
    transform: translateY(-50%);
    transition: transform 0.7s ease-in-out;
  }
  :hover img {
    transform: scale(1.1);
    transition: transform 0.7s ease-in-out;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 20px;
  color: #1d3c45;
  text-shadow: -1px 5px 5px #d2601a;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 10px;
  object-fit: cover;
`;
