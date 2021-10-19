import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import * as serviceWorker from "./serviceWorker";

import App from "./components/App";
import Firebase, { FirebaseContext } from "./components/Firebase";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
  
  & p, li, input, select, button {
    font-size: 18px;
  }
  & h1, h2, h3 {
    font-family: 'Lato', sans-serif;
  }
}
::-webkit-scrollbar {
  display: none;
}
`;

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <GlobalStyle />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
