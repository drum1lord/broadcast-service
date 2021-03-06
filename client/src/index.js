import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Store from "./contexts/store";
import Audio from "./contexts/audio";

const store = new Store();
const audio = new Audio();

export const Context = createContext({
  store,
});
export const AudioContext = createContext({
  audio,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <Context.Provider
    value={{
      store,
      audio,
    }}
  >
    <App />
  </Context.Provider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
