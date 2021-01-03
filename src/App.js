import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  NAVIGATION,
  FOOTER,
  HOME,
  LEAP,
  PRIME,
  LUCKY,
  PALLINDROME
} from "./index.js";

export default function App() {
  return (
    <Router>
      <div className="container-web-app">
        <NAVIGATION />
        <div className="container-content">
          <Switch>
            <Route path="/" exact component={HOME} />
            <Route path="/leap-birthyear" exact component={LEAP} />
            <Route path="/prime-birthday" exact component={PRIME} />
            <Route path="/lucky-birthday" exact component={LUCKY} />
            <Route path="/pallindrome-birthday" exact component={PALLINDROME} />
          </Switch>
        </div>
        <FOOTER />
      </div>
    </Router>
  );
}
