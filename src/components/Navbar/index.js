import React, { useState, useEffect } from "react";
import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  ListItem,
  MenuSvg,
  VerticalMenu,
  VerticalItemsList,
  VerticalListItem,
} from "./Style.js";
import MenuIcon from "../../assets/icons/menu.svg";

const Navbar = ({ sections }) => {
  const [ABOUT_SECTION, WORK_SECTION, CONTACT_SECTION] = sections;
  const [backgroundVisiblity, setBackgroundVisibility] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 120) setBackgroundVisibility(false);
      else setBackgroundVisibility(true);
    });
    return document.removeEventListener("scroll", () => {
      if (window.scrollY > 100) setBackgroundVisibility(false);
      else setBackgroundVisibility(true);
    });
  }, []);

  return (
    <NavbarSection backgroundVisible={backgroundVisiblity}>
      <Logo>
        <LogoText>Portfolio</LogoText>
      </Logo>
      <UlList>
        <ListItem
          onClick={() =>
            window.scrollTo({
              top: ABOUT_SECTION.current.offsetTop,
              behavior: "smooth",
            })
          }
        >
          About
        </ListItem>
        <ListItem
          onClick={() =>
            window.scrollTo({
              top: WORK_SECTION.current.offsetTop,
              behavior: "smooth",
            })
          }
        >
          Projects
        </ListItem>
        <ListItem
          onClick={() =>
            window.scrollTo({
              top: CONTACT_SECTION.current.offsetTop,
              behavior: "smooth",
            })
          }
        >
          Contact
        </ListItem>
      </UlList>
      <VerticalMenu>
        <MenuSvg src={MenuIcon} onClick={toggle} />
        <VerticalItemsList isOpen={isOpen}>
          <VerticalListItem
            onClick={() => {
              window.scrollTo({
                top: ABOUT_SECTION.current.offsetTop,
                behavior: "smooth",
              });
              toggle();
            }}
          >
            About
          </VerticalListItem>
          <VerticalListItem
            onClick={() => {
              window.scrollTo({
                top: WORK_SECTION.current.offsetTop,
                behavior: "smooth",
              });
              toggle();
            }}
          >
            Projects
          </VerticalListItem>
          <VerticalListItem
            onClick={() => {
              window.scrollTo({
                top: CONTACT_SECTION.current.offsetTop,
                behavior: "smooth",
              });
              toggle();
            }}
          >
            Contact
          </VerticalListItem>
        </VerticalItemsList>
      </VerticalMenu>
    </NavbarSection>
  );
};

export default Navbar;
