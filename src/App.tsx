import React from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Particles from "react-particles-js";
import "./App.css";
import "./App.scss";

import KNavbar from "./elements/navbar";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import Capstone from "./pages/capstone";
import About from "./pages/about";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                size_min: 0.5,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
        }}
      />
      <br />
      <KNavbar />
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="fade" key={location.key}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/capstone">
              <Capstone />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Redirect from="*" to="/">
              <Home />
            </Redirect>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
