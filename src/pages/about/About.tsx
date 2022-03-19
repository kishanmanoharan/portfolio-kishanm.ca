import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
      </Container>
    </>
  );
};
