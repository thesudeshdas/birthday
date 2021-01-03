import React from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";

import { LEAP, PRIME, LUCKY, PALLINDROME } from "../index.js";

import leapImg from "../images/leap-pic.jpg";
import luckyPic from "../images/lucky-pic.jpg";

const HOME = () => {
  return (
    <div className="container-homepage">
      <h1>Choose your game</h1>

      <div className="container-games">
        <div className="game-card">
          <img src={leapImg} alt="leap-pic" width="100%" />
          <Link to="/leap-birthyear" className="link-game">
            Leap Birthyear for something
          </Link>
        </div>
        <div className="game-card">
          <Link to="/prime-birthday" className="link-game">
            Prime Birthday
          </Link>
        </div>
        <div className="game-card">
          <img src={luckyPic} alt="lucky-pic" width="100%" />
          <Link to="/lucky-birthday" className="link-game">
            Lucky Birthday
          </Link>
        </div>
        <div className="game-card">
          <Link to="/pallindrom-birthday" className="link-game">
            Pallindrome Birthday
          </Link>
        </div>
      </div>

      <Switch>
        <Route path="/leap-birthyear" exact component={LEAP} />
        <Route path="/prime-birthday" exact component={PRIME} />
        <Route path="/lucky-birthday" exact component={LUCKY} />
        <Route path="/pallindrome-birthday" exact component={PALLINDROME} />
      </Switch>
    </div>
  );
};

export default HOME;
