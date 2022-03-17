import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import email from "../../img/envelope.svg";
import github from "../../img/github.svg";
import linkedin from "../../img/linkedin.svg";

export const Contact = () => {
  return (
    <>
      <Container fluid className="App-header">
        <Container className="title title-pad-1">
          <Row>
            <h2>Contact</h2>
            <h5>You can reach me here!</h5>
          </Row>
        </Container>
        <Container className="title-pad-1">
          <Row>
            <Col xl={4}>
              <a href="mailto:kishanmanoharan@gmail.com">
                <img src={email} alt="" className="svg" />
                <h3>Email</h3>
              </a>
            </Col>
            <Col xl={4}>
              <a href="https://github.com/kishanmanoharan">
                <img src={github} alt="" className="svg" />
                <h3>GitHub</h3>
              </a>
            </Col>
            <Col xl={4}>
              <a href="https://www.linkedin.com/in/kishan-manoharan-333464195/">
                <img src={linkedin} alt="" className="svg" />
                <h3>LinkedIn</h3>
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
