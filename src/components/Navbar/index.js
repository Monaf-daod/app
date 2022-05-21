import React, { useState, useEffect } from "react";
import { Menu } from "react-feather";
import {
  NavbarSection,
  UlList,
  ListItem,
  VerticalMenu,
  VerticalItemsList,
  VerticalListItem,
} from "./Style.js";

const Navbar = () => {
  const [backgroundVisiblity, setBackgroundVisibility] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(true);
  /// function for handling navigation bar position and its background color
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 120) setBackgroundVisibility(false);
      else setBackgroundVisibility(true);
    });
    return document.removeEventListener("scroll", () => {
      if (window.scrollY > 120) setBackgroundVisibility(false);
      else setBackgroundVisibility(true);
    });
  }, []);

  /// function for closeing vertical menu on clicking outside menu
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.id === "verticalMenuToggler") toggle();
      else if (!e.target.id || e.target.id !== "verticalMenuToggler")
        setIsOpen(false);
    });
  }, []);

  return (
    <NavbarSection backgroundVisible={backgroundVisiblity}>
      <UlList>
        <ListItem
          onClick={() =>
            document
              .getElementById("about-section")
              .scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          About
        </ListItem>
        <ListItem
          onClick={() =>
            document
              .getElementById("skills-section")
              .scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Skills
        </ListItem>
        <ListItem
          onClick={() =>
            document
              .getElementById("work-section")
              .scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Projects
        </ListItem>
        <ListItem
          onClick={() =>
            document
              .getElementById("contact-section")
              .scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Contact
        </ListItem>
      </UlList>
      <VerticalMenu>
        <Menu
          color="#ffffff"
          size={26}
          style={{ cursor: "pointer" }}
          id="verticalMenuToggler"
        />
        <VerticalItemsList isOpen={isOpen} id="verticalMenu">
          <VerticalListItem
            onClick={() => {
              document
                .getElementById("about-section")
                .scrollIntoView({ behavior: "smooth", block: "center" });
              toggle();
            }}
          >
            About
          </VerticalListItem>
          <VerticalListItem
            onClick={() => {
              document
                .getElementById("skills-section")
                .scrollIntoView({ behavior: "smooth", block: "start" });
              toggle();
            }}
          >
            Skills
          </VerticalListItem>
          <VerticalListItem
            onClick={() => {
              document
                .getElementById("work-section")
                .scrollIntoView({ behavior: "smooth", block: "center" });
              toggle();
            }}
          >
            Projects
          </VerticalListItem>
          <VerticalListItem
            onClick={() => {
              document
                .getElementById("contact-section")
                .scrollIntoView({ behavior: "smooth", block: "center" });
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
