import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <Container fluid className="App-header">
        <Container className="title title-pad-1">
          <Row>
            <h2>About Me</h2>
            <h5>A brief intro about me</h5>
            <Col></Col>
          </Row>
        </Container>
        <Container className="title-pad-0">
          <Row>
            <Col lg={4} className="text-start p-3">
              <div className="p-3 grey">
                <h4 className="thin">
                  "Without goals, and plans to reach them, you are like a ship
                  that has set sail with no destination."
                </h4>
                <h5>Fitzhugh Dodson</h5>
              </div>
            </Col>
            <Col lg={8} className="text-start p-3">
              <div className="p-3 grey">
                <h5 className="thin">
                  At a young age, I have developed a passion for development.
                  The ability to construct something new and usefull for all to
                  use. As I progressed, software development became a passion
                  and a viable profession. I had a destination. As a software
                  developer, I have a duty to create and develop exceptional
                  applications and programs for the world to use. Making
                  software easy to use, accessable, and with purpose quickly
                  became my main priorities on development.
                </h5>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-start p-3">
              <div className="p-3 grey">
                <h5 className="thin">
                  I am currently looking for positions in the workforce to make
                  my passion my profession, and to arrive at my life long
                  destination. I love to learn, help and teach with those around
                  me. Join me!
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="title info">
          <Row className="justify-content-md-center">
            <Col md={8} className="center">
              <h4 className="thin">Feel free to explore around!</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button as={Link} to="/projects">
                My Projects
              </Button>
              <Button as={Link} to="/capstone">
                Capstone Project
              </Button>
              <Button as={Link} to="/resume">
                Resume
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
