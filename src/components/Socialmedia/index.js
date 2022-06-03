import React from "react";
import { socialMedia } from "./data";
import Flip from "react-reveal/Flip";
import {
  SocialMedia,
  Socialmediasocial,
  Socialmediasocialicon,
  SocialmediasocialP,
  SocialmediasocialpSpan,
} from "./Style.js";

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
  return (
    <Flip left>
      <SocialMedia id="contact-section">{socialList}</SocialMedia>
    </Flip>
  );
};

export default Socialmedia;
