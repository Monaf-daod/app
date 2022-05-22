import React from "react";
import { LinkContainer } from "./style";
const CustomLinkWithAnimation = ({
  IconComponent,
  mainContent,
  providerLink = "tel:",
  tabFlag = "_self",
}) => {
  return (
    <LinkContainer
      mainContent={mainContent}
      onClick={() => window.open(`${providerLink}${mainContent}`, tabFlag)}
    >
      <IconComponent
        style={{
          color: "var(--primary-font-color)",
          background: "white",
          borderRadius: "50%",
          fontSize: "1.2rem",
          padding: "1px",
          margin: "2px",
        }}
      />
    </LinkContainer>
  );
};

export default CustomLinkWithAnimation;
