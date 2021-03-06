import React from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";

export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>The Office</h1>
          <p>Pick your favorite episode!</p>
        </div>
        <div className="favorites-display">
          <Link to="/">Home</Link> <Link to="/favorites">Favorites:</Link>
          {state.favorites.length}
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}
