import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <div>
      <Container style={{ marginTop: 30, backgroundColor: 'white', padding: 10 }}>
        <Row>
          <Col size="md-10">
            <h1>Contact</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-10">
          <p>Feel free to contact me:</p>
          <p><FontAwesomeIcon icon={faPhone}/> 0466 413 252</p>
          <p><FontAwesomeIcon icon={faEnvelope}/> <a href="mailto:luke.gallagher.cst@gmail.com">luke.gallagher.cst@gmail.com</a></p>
          <p><FontAwesomeIcon icon={faGithub}/> Check out my work on <a href="https://github.com/galluk">Github</a>.</p>
          <p><FontAwesomeIcon icon={faLinkedin}/> I'm also on <a href="https://www.linkedin.com/in/luke-gallagher-36a22a1b9/">LinkedIn</a>.</p>
          <p>You can peruse my resume <a href={process.env.PUBLIC_URL + "/docs/LukeGallagher-resume.pdf"} target="_blank" rel="noreferrer">here</a>.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;