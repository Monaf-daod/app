import styled from "styled-components";

export const HomeSection = styled.div`
  height: 100vh;
  background: url("images/cover6.jpg");
  background-size: cover;
  background-position: center;
  text-align: center;
  position: relative;
  filter: drop-shadow(0px 10px 50px var(--forth-color));
`;

export const HomeInformation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const HomeTitle = styled.h2`
  font-size: 30px;
  font-weight: 900;
  color: var(--primary-font-color);
`;
export const HomeInfo = styled.h4`
  font-size: 25px;
  font-weight: 800;
  font-style: italic;
  color: var(--second-font-color);
  /* text-shadow: 0 1px 0 #1d3c45, 0 2px 0 #1d3c4580, 0 3px 0 #1d3c4570,
    0 4px 0 #1d3c4560, 0 5px 0 #1d3c4550, 0 6px 1px rgba(0, 0, 0, 0.1),
    0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
    0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15),
    7px 3px 4px rgba(206, 89, 55, 0); */
`;

export const Homedesc = styled.p`
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  color: #fff1e1;
  font-weight: 500;
  margin-bottom: 20px;
  text-shadow: 0 1px 0 #1d3c4590, 0 2px 0 #1d3c4580, 0 3px 0 #1d3c4570,
    0 4px 0 #1d3c4560, 0 5px 0 #1d3c4550, 0 6px 1px rgba(0, 0, 0, 0.1),
    0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
    0 3px 5px rgba(0, 0, 0, 0.2);
`;

export const Span = styled.span`
  color: #fff1e1;
  font-weight: 600;
`;

export const HomeBtn = styled.button`
  background: var(--primary-font-color);
  color: #fff;
  font-size: 18px;
  width: 150px;
  border: 1px solid #fff;
  padding: 15px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 10px;
  :hover {
    background: transparent;
    color: var(--primary-font-color);
    border: 1px solid var(--primary-font-color);
  }
`;
