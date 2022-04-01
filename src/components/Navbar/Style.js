import styled from "styled-components";

export const NavbarSection = styled.div`
  width: 100%;
  padding: 15px 10px;
  overflow: hidden;
  color: ${(props) =>
    props.backgroundVisible ? "var(--primary-font-color)" : "#fff"};
  background: ${(props) =>
    props.backgroundVisible ? "transparent" : "var(--primary-font-color)"};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9999;
`;

export const Logo = styled.div`
  width: 30%;
`;

export const LogoText = styled.h2`
  font-size: 26px;
  font-weight: 800;
  font-style: italic;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px 0 #1a374d, 0 2px 0 #1a374d80, 0 3px 0 #1a374d70,
    0 4px 0 #1a374d60, 0 5px 0 #1a374d50, 0 6px 1px #1a374d50, 0 0 5px #1a374d40,
    0 1px 3px #1a374d20, 0 3px 5px #1a374d10;
`;

export const UlList = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: unset;
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;

export const ListItem = styled.span`
  font-weight: 500;
  padding: 8px;
  margin-left: 5px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: var(--forth-color);
    background: var(--primary-font-color);
    border-radius: 20px 0px 20px 0px;
  }
`;

export const VerticalMenu = styled.div`
  display: none;
  position: relative;
  @media (min-width: 320px) and (max-width: 767px) {
    display: inline-block;
  }
`;

export const VerticalItemsList = styled.div`
  width: 50vw;
  height: 100vh;
  background: #fff;
  position: fixed;
  right: 0;
  top: 0;
  display: ${(props) => (props.isOpen ? "inline-flex" : "none")};
  flex-direction: ${(props) => (props.isOpen ? "column" : "unset")};
  align-items: ${(props) => (props.isOpen ? "center" : "unset")};
  justify-content: ${(props) => (props.isOpen ? "flex-start" : "unset")};
`;

export const MenuSvg = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const VerticalListItem = styled.span`
  font-weight: 500;
  width: 100%;
  padding: 8px;
  color: var(--primary-font-color);
  margin: 4px auto;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: var(--forth-color);
    background: var(--primary-font-color);
  }
`;
