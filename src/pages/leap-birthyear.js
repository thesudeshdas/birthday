import React from "react";
import { useState } from "react";

const LEAP = () => {
  const [yearToCheck, setYearToCheck] = useState(1900);

  const changeHandler = event => {
    setYearToCheck(event.target.value.slice(0, 4));
  };

  const checkLeap = year => {
    console.log(year);
  };

  return (
    <div className="game">
      <h1> Is Your Birth Year a Leap Year? </h1>
      <input type="date" onChange={changeHandler} />
      <button onClick={() => checkLeap(yearToCheck)}>Check</button>
    </div>
  );
};

export default LEAP;
