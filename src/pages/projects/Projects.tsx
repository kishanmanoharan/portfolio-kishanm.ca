import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Projects = () => {
  return (
    <>
      <Container fluid className="App-header">
        <Container className="title title-pad-1">
          <Row>
            <h2>Projects</h2>
            <h5>
              You can find these on my{" "}
              <a href="https://github.com/kishanmanoharan">Github</a>
            </h5>
          </Row>
        </Container>
        <Container className="title-pad-1">
          <Row>
            <Col xl={3} lg={6}>
              <Container id="ambientspotify" className="projectCard title">
                <div className="justify-content-md-center projectCardHover align-middle text-center">
                  <div className="col-12 position-absolute top-50 start-50 translate-middle">
                    <a href="https://spotify.kishanm.ca/">
                      <h4>Ambient Spotify</h4>
                    </a>
                    <h6>An ambient now-playing screen</h6>
                  </div>
                </div>
                <div className="projectCardTab">
                  <div className="projectCardHeader">
                    <h4>Ambient Spotify</h4>
                  </div>
                </div>
              </Container>
            </Col>
            <Col xl={3} lg={6}>
              <Container id="peopleplanner" className="projectCard title">
                <div className="justify-content-md-center projectCardHover align-middle text-center">
                  <div className="col-12 position-absolute top-50 start-50 translate-middle">
                    <a href="https://github.com/kishanmanoharan/people-planner">
                      <h4>People Planner</h4>
                    </a>
                    <h6>A simple planning tool for groups</h6>
                  </div>
                </div>
                <div className="projectCardTab">
                  <div className="projectCardHeader">
                    <h4>People Planner</h4>
                  </div>
                </div>
              </Container>
            </Col>
            <Col xl={3} lg={6}>
              <Container id="minimalminispotify" className="projectCard title">
                <div className="justify-content-md-center projectCardHover align-middle text-center">
                  <div className="col-12 position-absolute top-50 start-50 translate-middle">
                    <a href="https://github.com/kishanmanoharan/minimal-mini-spotify">
                      <h4>Minimal Mini Spotify</h4>
                    </a>
                    <h6>A mini Spotify player using Electron</h6>
                  </div>
                </div>
                <div className="projectCardTab">
                  <div className="projectCardHeader">
                    <h4>Minimal Mini Spotify</h4>
                  </div>
                </div>
              </Container>
            </Col>
            <Col xl={3} lg={6}>
              <Container id="reactweather" className="projectCard title">
                <div className="justify-content-md-center projectCardHover align-middle text-center">
                  <div className="col-12 position-absolute top-50 start-50 translate-middle">
                    <a href="https://github.com/kishanmanoharan/101266708_comp3123_labtest2">
                      <h4>React Weather</h4>
                    </a>
                    <h6>Location based react weather widget</h6>
                  </div>
                </div>
                <div className="projectCardTab">
                  <div className="projectCardHeader">
                    <h4>React Weather</h4>
                  </div>
                </div>
              </Container>
            </Col>
          </Row>
          <Row className="">
            <Col xl={3} lg={6}>
              <Container id="mochatest" className="projectCard title">
                <div className="justify-content-md-center projectCardHover align-middle text-center">
                  <div className="col-12 position-absolute top-50 start-50 translate-middle">
                    <a href="https://github.com/kishanmanoharan/lab2_mocha_test">
                      <h4>Mocha Test</h4>
                    </a>
                    <h6>Test scripts using MochaJS</h6>
                  </div>
                </div>
                <div className="projectCardTab">
                  <div className="projectCardHeader">
                    <h4>Mocha Test</h4>
                  </div>
                </div>
              </Container>
            </Col>
            <Col xl={3} lg={6}>
              <Container id="mobileweather" className="projectCard title">
                <div className="justify-content-md-center projectCardHover align-middle text-center">
                  <div className="col-12 position-absolute top-50 start-50 translate-middle">
                    <a href="https://github.com/kishanmanoharan/COMP3074-final-project">
                      <h4>Mobile Weather</h4>
                    </a>
                    <h6>React Native weather app</h6>
                  </div>
                </div>
                <div className="projectCardTab">
                  <div className="projectCardHeader">
                    <h4>Mobile Weather</h4>
                  </div>
                </div>
              </Container>
            </Col>
            <Col xl={3} lg={6}>
              <Container id="frontendemployee" className="projectCard title">
                <div className="justify-content-md-center projectCardHover align-middle text-center">
                  <div className="col-12 position-absolute top-50 start-50 translate-middle">
                    <a href="https://github.com/kishanmanoharan/101266708_assignment2_frontend">
                      <h4>Employee DB (Frontend)</h4>
                    </a>
                    <h6>Frontend of eployeee database</h6>
                  </div>
                </div>
                <div className="projectCardTab">
                  <div className="projectCardHeader">
                    <h4>Employee DB (Frontend)</h4>
                  </div>
                </div>
              </Container>
            </Col>
            <Col xl={3} lg={6}>
              <Container id="recipes" className="projectCard title">
                <div className="justify-content-md-center projectCardHover align-middle text-center">
                  <div className="col-12 position-absolute top-50 start-50 translate-middle">
                    <a href="https://github.com/kishanmanoharan/assn1">
                      <h4>Recipes App</h4>
                    </a>
                    <h6>Multi-user recipies app</h6>
                  </div>
                </div>
                <div className="projectCardTab">
                  <div className="projectCardHeader">
                    <h4>Recipes App</h4>
                  </div>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
