import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  SocialMedia,
  Socialmediasocial,
  Socialmediasocialicon,
  SocialmediasocialP,
  SocialmediasocialpSpan,
} from "./Style.js";

const Socialmedia = ({ contactRef }) => {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setSocial(res.data.social);
    });
  }, []);

  const socialList = social.map((item) => {
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
  return <SocialMedia ref={contactRef}>{socialList}</SocialMedia>;
};

export default Socialmedia;
