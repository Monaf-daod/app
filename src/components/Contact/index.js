import React, { Fragment } from "react";
import Footer from "./../Footer";
import {
  ContactSection,
  ContactTitle,
  Span,
  ContactForm,
  Forminput,
  InputText,
  InputEmail,
  InputSub,
  Textarea,
  InputSubmit,
} from "./Style.js";

const Contact = () => {
  return (
    <Fragment>
      <ContactSection>
        <div className="container">
          <ContactTitle>
            <Span>Drop </Span>Me A line
          </ContactTitle>
          <ContactForm action="">
            <Forminput>
              <InputText type="text" placeholder="Your Name" />
              <InputEmail type="email" placeholder="Your Email" />
            </Forminput>
            <InputSub type="text" placeholder="Your Subject" />
            <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
            <InputSubmit type="submit" value="Send Message" />
          </ContactForm>
        </div>
      </ContactSection>
      <Footer />
    </Fragment>
  );
};

export default Contact;
