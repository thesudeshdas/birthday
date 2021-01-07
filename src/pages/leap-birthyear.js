import React from "react";
import { useState } from "react";

const LEAP = () => {
  let result = (
    <div className="container-output">
      <h2 className="message"> Your Result will appear here. </h2>
    </div>
  );

  const [yearToCheck, setYearToCheck] = useState();
  const [output, setOutput] = useState(result);
  const [errorMessage, setErrorMessage] = useState();

  const changeHandler = (event) => {
    setYearToCheck(event.target.value.slice(0, 4));
  };

  const closeError = () => {
    setErrorMessage();
  };

  const showError = () => {
    const x = (
      <div className="container-error-bg">
        <div className="container-error">
          <h1>Please input your Birthday Correctly!</h1>
          <i className="far fa-times-circle" onClick={() => closeError()}></i>
        </div>
      </div>
    );

    setErrorMessage(x);
  };

  const checkLeap = (year) => {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  const userMessage = (year) => {
    if (year === undefined) {
      showError();
    }

    if (checkLeap(year) === true) {
      result = (
        <div className="container-output">
          <h2 className="message"> YAY! It is a Leap Year.</h2>
          <button
            className="btn-reset"
            onClick={() => {
              location.reload();
            }}
          >
            Reset
          </button>
        </div>
      );

      setOutput(result);
    } else if (checkLeap(year) === false) {
      result = (
        <div className="container-output">
          <h2 className="message"> UH OH! It is not a Leap Year.</h2>
          <button
            className="btn-reset"
            onClick={() => {
              location.reload();
            }}
          >
            Reset
          </button>
        </div>
      );

      setOutput(result);
    }
  };

  return (
    <div className="game">
      <div>
        <h1>
          {" "}
          <u> Is Your Birth Year a Leap Year? </u>{" "}
        </h1>
        <h2> Please enter your birthday </h2>
        <input type="date" onChange={changeHandler} />
        <button onClick={() => userMessage(yearToCheck)}>Check</button>
      </div>
      {output}
      {errorMessage}
    </div>
  );
};

export default LEAP;
