import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { authState } from "./contexts/auth.context";
import GlobalContext from "./contexts/global.context";

import ProjectList from "./projects/project-list/project-list";

import "./app.scss";

export let app;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    app = this;

    this.state = {
      authState
    };
  }
  render() {
    return (
      <div id="app">
        <Router>
          <GlobalContext {...this.state}>
            <ProjectList/>
          </GlobalContext>
        </Router>
      </div>
    );
  }
}
