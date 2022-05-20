import React from "react";
import {
  SocialMedia,
  Socialmediasocial,
  Socialmediasocialicon,
  SocialmediasocialP,
  SocialmediasocialpSpan,
} from "./Style.js";
import { socialMedia } from "./data";

const Socialmedia = () => {
  const socialList = socialMedia.map((item) => {
    return (
      <Socialmediasocial
        info={item.id}
        key={item.id}
        onClick={() => window.open(item.link, item.flag)}
      >
        <Socialmediasocialicon src={item.icon} />
        <SocialmediasocialP>
          <SocialmediasocialpSpan>{item.body}</SocialmediasocialpSpan>
        </SocialmediasocialP>
      </Socialmediasocial>
    );
  });
  return <SocialMedia id="contact-section">{socialList}</SocialMedia>;
};

export default Socialmedia;
