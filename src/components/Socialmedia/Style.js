import styled from "styled-components";

export const SocialMedia = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 5rem;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  align-items: center;
`;

export const Socialmediasocial = styled.div`
  width: 33.33%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  cursor: pointer;
  background: ${(props) => (props.info === 1 ? "#0274b3" : "")};
  background: ${(props) => (props.info === 2 ? "#bcbcbc" : "")};
  background: ${(props) => (props.info === 3 ? "#cc2127" : "")};
  background: ${(props) => (props.info === 4 ? "#25D366" : "")};
  background: ${(props) => (props.info === 5 ? "#229ED9a1" : "")};

  @media (min-width: 320px) and (max-width: 767px) {
    width: 50%;
    height: 9rem;
  }
`;

export const Socialmediasocialicon = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const SocialmediasocialP = styled.p`
  font-weight: normal;
  font-size: 20px;
  color: #fff;
  text-align: center;
`;

export const SocialmediasocialpSpan = styled.span`
  display: block;
  font-weight: normal;
`;
