import styled from "styled-components";

export const WorkSection = styled.div`
  height: auto;
  padding: 50px 0;
  overflow: hidden;
  background: #fff1e1;
`;

export const Worktitle = styled.h2`
  font-size: 60px;
  color: #1d3c45;
  text-shadow: -1px 5px 5px #d2601a;
`;

export const Span = styled.span`
  font-weight: 200;
  color: #1d3c45;
`;

export const Workpart = styled.div`
  margin-top: 20px;
  width: 30%;
  float: left;
  position: relative;
  height: auto;
  padding: 100px 0;
  border: 1px solid #d2601a70;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 5%;
  margin-left: ${(props) => (props.first === 1 ? "0" : "5%")};
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
  :hover p {
    opacity: 1;
    transform: translateY(-30%);
    transition: transform 0.7s ease-in-out, opacity 1s ease-in-out;
  }
  :hover hr {
    opacity: 1;
    transition: opacity 0.4s ease-in-out;
  }
  :hover h4,
  :hover i {
    transform: translateY(-50%);
    transition: transform 0.7s ease-in-out;
  }
`;

export const Workicon = styled.i`
  color: #1d3c45;
  margin-bottom: 20px;
  transform: translateY(100%);
  transition: transform 0.7s ease-in-out;
`;

export const Parttitle = styled.h4`
  font-size: 25px;
  color: #d2601a;
  margin-bottom: 20px;
  transform: translateY(100%);
  transition: transform 0.7s ease-in-out;
`;

export const Line = styled.hr`
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
`;

export const Partdesc = styled.p`
  font-size: 14px;
  color: #1d3c45;
  padding: 20px;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
`;
