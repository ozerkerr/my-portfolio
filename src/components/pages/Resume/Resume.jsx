// import components
import React from "react";
import { Container, Button } from "react-bootstrap";
import myRes from "../../../assets/files/OzerKelgemResume.docx";

// object for experience
const workExperience = {
  audit: `Building and enhancing web applications using ReactJS with TypeScript.
  Developing new features from scratch while closely working with product,
  BE and design teams. Building reusable components, refactoring old components,
  improving performance and optimizing codebase.`,
  walmart: `Working on several applications with ReactJS, Redux.
  Building new reusable components, and refactoring old codebase to new architecture.
  Successfully delivered new features for Item Page and Reviews applications.
  Working on improving application performance and design.`,
  tvl: `Building the general architecture for the application and implementing it using React, Redux.
  Converting Redux-thunk to Saga using Flow as static type checker. 
  Applying expert knowledge of JS, React to improve performance and deliver production ready code.`,
  cio: `Helping to build the front-end part of the customer portal with React+Redux,
  converting Reflux to Redux and Isomorphic JavaScript.
  Rebuild feed feature to improve reliability and performance.`,
};

// create component
function Resume() {
  return (
    <Container className="my-5">
      <section className="d-flex flex-direction-row align-items-end justify-content-between my-3">
        <h5 className="m-0">Resume</h5>
        <Button
          variant="info"
          download
          rel="noopener noreferrer"
          target="_blank"
          className="fa fa-download"
          href={myRes}
        >
          Click to Dowload
        </Button>{" "}
      </section>
      <section className="my-5">
        <h6>
          <strong>Skills:</strong>
        </h6>
        <p>
          HTML, CSS (LESS and Sass), ReactJS, TypeScript, Flow, Bootstrap,
          JavaScript(jQuery, OOP), AJAX, JSON, PHP, C++, Java, Wordpress, LAMP,
          jQuery, GraphQL, NodeJS, Testing, Git, Mongo, Linux. Webpack, SQL.
          Mobile Design, Cross-browser compatibility, Scrum, Agile.
        </p>
      </section>
      <section className="my-3">
        <h6>
          <strong>Experience:</strong>
        </h6>
        <p className="d-flex flex-column">
          <strong>
            05/21 – Present Front-end Software Engineer, AuditoriaAI, Los
            Angeles, CA{" "}
          </strong>{" "}
          {workExperience.audit}
        </p>
        <p className="d-flex flex-column">
          <strong>
            08/19 –05/21 Front-end Software Engineer, Walmartlabs, Sunnyvale, CA{" "}
          </strong>{" "}
          {workExperience.walmart}
        </p>
        <p className="d-flex flex-column">
          <strong>
            05/18 – 08/19 Front-end Software Engineer, Truvaluelabs,
            San-Francisco, CA{" "}
          </strong>{" "}
          {workExperience.tvl}
        </p>
        <p className="d-flex flex-column">
          <strong>
            07/16 – 04/18 Software Engineer, Connected IO, Los Gatos, CA{" "}
          </strong>{" "}
          {workExperience.cio}
        </p>
      </section>
    </Container>
  );
}

export default Resume;
