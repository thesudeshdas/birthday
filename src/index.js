import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export { default as NAVIGATION } from "./components/navigation";
export { default as FOOTER } from "./components/footer";

export { default as HOME } from "./pages/homepage.js";
export { default as LEAP } from "./pages/leap-birthyear";
export { default as PRIME } from "./pages/prime-birthday";
export { default as LUCKY } from "./pages/lucky-birthday";
export { default as PALLINDROME } from "./pages/pallindrome-birthday";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
