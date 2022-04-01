import styled from "styled-components";

export const AboutSection = styled.div`
  height: 550px;
  background: url("images/about-bg.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const Aboutinfo = styled.div`
  padding-top: 100px;
  width: 50%;
  float: right;
`;

export const AboutInfoTitle = styled.h2`
  font-weight: bold;
  font-size: 50px;
`;

export const AboutInfoTitleSpan = styled.span`
  font-weight: normal;
`;

export const AboutInfoDir = styled.h4`
  font-size: 40px;
  color: #eb5424;
  margin-bottom: 20px;
`;

export const AboutInfoDesc = styled.p`
  color: #000;
  margin-bottom: 15px;
  line-height: 1.8;
`;

export const AboutInfoDesca = styled.a`
  text-decoration: none;
`;
