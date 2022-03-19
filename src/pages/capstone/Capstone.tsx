import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import login from "../../img/capstone/peopleplanner-login.png";
import home from "../../img/capstone/peopleplanner-home.png";
import schedule from "../../img/capstone/peopleplanner-schedule.png";
import addgroup from "../../img/capstone/peopleplanner-add-group.png";

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
        <Container className="title-pad-0">
          <Row>
            <Col xl={4} className="text-start p-3">
              <div className="p-3 grey">
                <h2 className="mb-4">Summary</h2>
                <p>
                  People Planner is designed to help bring friend groups
                  together. This app relieves the stress and dificulties brought
                  by planning, and creates a more streamline process. The app
                  centeralizes and combines every member's timetable into one
                  group schedule, which users can then plan around. No more
                  asking "When are you free?"
                </p>
              </div>
            </Col>
            <Col xl={4} className="text-start p-3">
              <div className="p-3 grey">
                <h2 className="mb-4">Vision</h2>
                <p>
                  Our vision was to make planning easier and accessable to
                  everyone. Everyone has their own life, with their own plans.
                  Every friend group has difficulties planning or organizing
                  meets. People Planner aims to change that by closing the gap
                  between getting everyones availability, and organizing a meet.
                </p>
              </div>
            </Col>
            <Col xl={4} className="text-start p-3">
              <div className="p-3 grey">
                <h2 className="mb-4">Requirements</h2>
                <p>
                  <ul>
                    <li>Google account (used to authenticate and grab data)</li>
                    <li>
                      Desktop browser (currently only supported on desktop,
                      mobile in the near future)
                    </li>
                  </ul>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={6} className="text-start p-3">
              <Row>
                <Col>
                  <div className="p-3 grey">
                    <h2 className="mb-4">
                      Project Plan
                      <Button href="./PeoplePlanner_Project_Plan.pdf">
                        Open Project Plan
                      </Button>
                    </h2>
                    <h4>View our detailed Project Plan above</h4>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="text-start mt-4">
                  <div className="p-3 grey">
                    <h2 className="mb-4">System Implementation</h2>
                    <p>
                      People Planner will be using ReactJS in combination with
                      Bootstrap to interact with the user (frontend). For
                      server-side functions, Google Firebase will be used for
                      authentication while Google Firestore will handle and
                      store all database functions and data. Netlify will also
                      be used for hosting and redundancy.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl={6} className="text-start p-3">
              <Row>
                <Col>
                  <div className="p-3 grey">
                    <h2 className="mb-4">Requirements Analysis/Design</h2>
                    <Row>
                      <Col>
                        <p>
                          <ul>
                            <li>NodeJS</li>
                            <li>ReactJS</li>
                            <li>Google Firebase</li>
                          </ul>
                        </p>
                      </Col>
                      <Col>
                        <p>
                          <ul>
                            <li>Google Firestore</li>
                            <li>React Bootstrap</li>
                            <li>FullCalendar</li>
                          </ul>
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="text-start mt-4">
                  <div className="p-3 grey">
                    <h2 className="mb-4">
                      Status Report
                      <Button
                        className="green-btn"
                        variant="success"
                        href="https://github.com/kishanmanoharan/people-planner"
                      >
                        Good
                      </Button>
                    </h2>
                    <h4>In Development</h4>
                    <h5>Expected delivery - April 2022</h5>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xl={12} className="text-start p-3">
              <div className="p-3 grey">
                <h2 className="mb-4">Wireframe/Screenshots</h2>
                <Row>
                  <Col lg={6} className="darkgrey">
                    <h4>Login</h4>
                    <img
                      src={login}
                      className="screenshot"
                      alt="People Planner - Login page"
                    ></img>
                  </Col>
                  <Col lg={6} className="darkgrey">
                    <h4>Home</h4>
                    <img
                      src={home}
                      className="screenshot"
                      alt="People Planner - Home page"
                    ></img>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} className="darkgrey">
                    <h4>Schedule</h4>
                    <img
                      src={schedule}
                      className="screenshot"
                      alt="People Planner - Schedule page"
                    ></img>
                  </Col>
                  <Col lg={6} className="darkgrey">
                    <h4>Add Group</h4>
                    <img
                      src={addgroup}
                      className="screenshot"
                      alt="People Planner - Add group page"
                    ></img>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
