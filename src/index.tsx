import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import StoreProvider from "./Store";

export default function Index(): JSX.Element {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
}

const root = document.getElementById("app-root");

ReactDOM.render(<Index />, root);
