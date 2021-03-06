import React from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";

import { LEAP, PRIME, LUCKY, PALLINDROME } from "../index.js";

import leapPic from "../images/leap-pic.jpg";
import luckyPic from "../images/lucky-pic.jpg";
import primePic from "../images/prime-pic.jpg";
import pallindromePic from "../images/pallindrome-pic.jpg";

const HOME = () => {
  return (
    <div className="container-homepage">
      <h1>Choose your game</h1>

      <div className="container-games">
        <div className="game-card">
          <img src={leapPic} alt="leap-pic" width="100%" />
          <Link to="/leap-birthyear" className="link-game">
            Leap Birthyear
          </Link>
        </div>
        <div className="game-card">
          <img src={primePic} alt="prime-pic" width="100%" />
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
          <img src={pallindromePic} alt="pallindrome-pic" width="100%" />
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
