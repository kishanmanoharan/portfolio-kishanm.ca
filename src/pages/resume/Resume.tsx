import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./KishanManoharanResume-2022.pdf";

var randomColor = require("random-color");

function randColor() {
  var color = randomColor();
  return color.hexString();
}

export const Resume = () => {
  return (
    <>
      <Container fluid className="App-header">
        <Container className="title title-pad-1">
          <Row>
            <h2>Resume</h2>
            <h5>
              Take a look below for a quick run-down, or download my full resume
            </h5>
            <Col>
              <Button href="./KishanManoharanResume-2022.pdf">
                Open Resume
              </Button>
            </Col>
          </Row>
        </Container>
        <Container className="title-pad-0">
          <Row>
            <Col xl={4} className="text-start p-3">
              <h2 className="mb-4">Work Experience</h2>
              <div className="p-3 grey">
                <h4>
                  <a href="https://curvemedia.co/">
                    <strong>Curve Media</strong>
                  </a>
                </h4>
                <h5>Febuary 2020 - Present</h5>
                <h6>
                  <strong>Freelance Developer</strong>
                </h6>
                <h6>
                  Involved in designing, developing, and testing programs and
                  systems for clients, as well as side projects. Also has
                  photography and marketing operation packages for all clients.
                </h6>
              </div>
              <div className="p-3 mt-3 grey">
                <h4>
                  <strong>Staples Canada</strong>
                </h4>
                <h5>August 2020 - Present</h5>
                <h6>
                  <strong>Technology Associate/Technician</strong>
                </h6>
                <h6>
                  Assisted customers with technical issues and needs. Suggested
                  items and solutions based on budget, use-cases, and
                  reliability that are best catered to the customer.
                </h6>
              </div>
            </Col>
            <Col xl={4} className="text-start p-3">
              <h2 className="mb-4">Education</h2>
              <div className="p-3 grey">
                <h4>
                  <strong>George Brown College</strong>
                </h4>
                <h5>September 2019 - Present</h5>
                <h6>
                  <strong>Computer Program Analyst - T177</strong>
                </h6>
                <h6>
                  This program excels at giving students the experience and
                  skills needed for a wide variety of software-based careers.
                  This includes experience in web, open-source, Unix, and
                  object-oriented languages.
                </h6>
                <div className="progress-bar-container">
                  <div className="progress-bar"></div>
                </div>
              </div>
            </Col>
            <Col xl={4} className="text-start p-3">
              <h2 className="mb-4">Skills</h2>
              <Row>
                <Col>
                  <div className="p-3 grey">
                    <h4>
                      <strong>Languages</strong>
                    </h4>
                    <div className="tag" style={{ color: randColor() }}>
                      HTML
                    </div>
                    <div className="tag" style={{ color: randColor() }}>
                      CSS
                    </div>
                    <div className="tag" style={{ color: randColor() }}>
                      JavaScript
                    </div>
                    <div className="tag" style={{ color: randColor() }}>
                      TypeScript
                    </div>
                    <div className="tag" style={{ color: randColor() }}>
                      Java
                    </div>
                    <div className="tag" style={{ color: randColor() }}>
                      C#
                    </div>
                    <div className="tag" style={{ color: randColor() }}>
                      Python
                    </div>
                    <h4 className="pt-3">
                      <strong>Frameworks</strong>
                    </h4>
                    <div className="tag" style={{ color: randColor() }}>
                      Bootstrap
                    </div>
                    <div className="tag" style={{ color: randColor() }}>
                      AngularJS
                    </div>
                    <div className="tag" style={{ color: randColor() }}>
                      ReactJS
                    </div>
                    <div className="tag" style={{ color: randColor() }}>
                      NodeJS
                    </div>
                    <div className="tag" style={{ color: randColor() }}>
                      Electron
                    </div>
                    <h4 className="pt-3">
                      <strong>Tools</strong>
                    </h4>
                    <div className="tag" style={{ color: randColor() }}>
                      Visual Studio Code
                    </div>
                    <div className="tag" style={{ color: randColor() }}>
                      Git
                    </div>
                    <div className="tag" style={{ color: randColor() }}>
                      Powershell
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
