import React from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      {/* <Alert className="sitealert" variant="primary">
        Check out my official site at{" "}
        <Alert.Link href="https://kishanm.ca/">kishanm.ca</Alert.Link>
      </Alert> */}
      <Container fluid className="App-header">
        <Container className="title title-pad-3">
          <Row className="justify-content-md-center">
            <Col md={8} className="center">
              <h1>Kishan Manoharan</h1>
              <h4>Student, Programmer, Human</h4>
            </Col>
          </Row>
        </Container>
        <Container className="title title-pad-1 info">
          <Row className="justify-content-md-center">
            <Col md={8} className="center">
              <h5>
                Studying at George Brown College while designing and developing
                web and software applications. I enjoy programming, photography,
                coffee, and other 'human-activities'!
              </h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button as={Link} to="/projects">
                My work
              </Button>
              <Button as={Link} to="/contact">
                Contact
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
