import React from "react";

const FOOTER = () => {
  return (
    <footer>
      <h2>Get in touch with me</h2>
      <ul>
        <li className="list-item-inline">
          <a
            className="link-button-alternate"
            href="https://github.com/thesudeshdas"
            target="blank"
          >
            <i className="fab fa-github" /> GitHub
          </a>
        </li>
        <li className="list-item-inline">
          <a
            className="link-button-alternate"
            href="https://www.linkedin.com/in/sudesh-kumar-das"
            target="blank"
          >
            <i className="fab fa-linkedin" /> LinkedIn
          </a>
        </li>
        <li className="list-item-inline">
          <a
            className="link-button-alternate"
            href="https://twitter.com/thesudeshdas"
            target="blank"
          >
            <i className="fab fa-twitter" /> Twitter
          </a>
        </li>
        <li className="list-item-inline">
          <a
            className="link-button-alternate"
            href="https://thesudeshdas.medium.com/"
            target="blank"
          >
            <i className="fab fa-medium-m" /> Medium
          </a>
        </li>
        <li className="list-item-inline">
          <a
            className="link-button-alternate"
            href="mailto:sudeshkumardas7@gmail.com"
            target="blank"
          >
            <i className="fa fa-envelope" /> Email
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default FOOTER;
