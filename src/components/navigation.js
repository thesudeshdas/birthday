import React from "react";
import { Link, withRouter } from "react-router-dom";

const NAVIGATION = props => {
  return (
    <nav>
      <h1>
        <Link to="/">BIRTHDAY PLAYGROUND</Link>
      </h1>
      <ul>
        <li
          className={`nav-item  ${
            props.location.pathname === "/" ? "active" : ""
          }`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`nav-item  ${
            props.location.pathname === "/leap-birthyear" ? "active" : ""
          }`}
        >
          <Link to="/leap-birthyear">Leap Birthyear</Link>
        </li>
        <li
          className={`nav-item  ${
            props.location.pathname === "/prime-birthday" ? "active" : ""
          }`}
        >
          <Link to="/prime-birthday">Prime Birthday</Link>
        </li>
        <li
          className={`nav-item  ${
            props.location.pathname === "/lucky-birthday" ? "active" : ""
          }`}
        >
          <Link to="/lucky-birthday">Lucky Birthday</Link>
        </li>
        <li
          className={`nav-item  ${
            props.location.pathname === "/pallindrome-birthday" ? "active" : ""
          }`}
        >
          <Link to="/pallindrome-birthday">Pallindrome Birthday</Link>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(NAVIGATION);
