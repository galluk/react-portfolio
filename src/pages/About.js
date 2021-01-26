import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  const imgstyle = {
    float: 'left',
    border: 'none',
    width: '250px',
    height: '216px',
    padding: '10px'
  };

  return (
    <div>
      <Container style={{ marginTop: 30, backgroundColor: 'white' }}>
        <Row>
          <Col size="md-10">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
          <img style={imgstyle} alt="mug shot of me" src={process.env.PUBLIC_URL + '/images/Headshot.jpg'} />
          </Col>
          <Col size="md-8">
          <p>I'm a married father of two great kids. The Good Wife is a teacher and as a family we enjoy stategic board games, camping and hockey. The Boy and I also love all things cricket - playing, training and watching!</p>
          <p>
            I started my working career as a Maths/Computing Studies teacher before moving into IT, where I have spent about 18 years working on client-server applications in Delphi with a MSSQL DB backend, with a few libraries in C# and C++. I have
            recently begun a transition into web development and am enjoying learning how it all comes together.
          </p>
          <p>In my (disappearing) spare time I enjoy most things sport, having coached junior cricket, rugby and hockey as well as serving as secretary for the local senior cricket association.</p>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
