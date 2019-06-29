import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "./components/landing";

import "./App.css";
import NotFound from "./components/not-found";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
