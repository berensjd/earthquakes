import React, { Component, Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Earthquakes from "./components/earthquakes";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

library.add(faCaretUp, faCaretDown);
class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <ToastContainer />
        <main className="container">
          <Switch>
            <Route path="/earthquakes" component={Earthquakes} />
            <Redirect exact from="/" to="/earthquakes" />
            <Redirect to="/earthquakes" />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
