// import './App.css';
import React from "react";
import { Container, Image } from "react-bootstrap";
import ProfilePicture from "../../../assets/images/ProfilePicture.JPG";

const aboutMeText = `I have actively delivered smart cutting-edge user interfaces and successful production-ready web development code. With precision skill and craftsmanship, I have used my unique knowledge of design and front-end technologies to create cross-browser experiences focused on long-term user retention and engagement.`;

function AboutMe() {
  return (
    <Container className="my-5">
      <section className="my-3">
        <h5>About Me</h5>
      </section>
      <section className="my-3">
        <Image src={ProfilePicture} className="img-thumbnail" rounded={true} />
      </section>
      {aboutMeText}
    </Container>
  );
}

export default AboutMe;
