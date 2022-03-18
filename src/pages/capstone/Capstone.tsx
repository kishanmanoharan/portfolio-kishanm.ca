import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Capstone = () => {
  return (
    <>
      <Container fluid className="App-header">
        <Container className="title title-pad-1">
          <Row>
            <h2>Capstone Project</h2>
            <h4>
              <a href="https://github.com/kishanmanoharan">People Planner</a>
            </h4>
            <h5>
              Below is a detailed breakdown of my year-long capstone project
            </h5>
          </Row>
        </Container>
        <Container className="title-pad-1">
          <Row>
            <Col xl={4} className="text-start p-3">
              <div className="p-3 grey">
                <h2 className="mb-4">Summary</h2>
              </div>
            </Col>
            <Col xl={4} className="text-start p-3">
              <div className="p-3 grey">
                <h2 className="mb-4">Vision</h2>
              </div>
            </Col>
            <Col xl={4} className="text-start p-3">
              <div className="p-3 grey">
                <h2 className="mb-4">Requirements</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={6} className="text-start p-3">
              <div className="p-3 grey">
                <h2 className="mb-4">Project Plan</h2>
              </div>
            </Col>
            <Col xl={6} className="text-start p-3">
              <div className="p-3 grey">
                <h2 className="mb-4">Requirements Analysis/Design</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
