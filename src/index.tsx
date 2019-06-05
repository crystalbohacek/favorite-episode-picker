import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StoreProvider from "./Store";
import { Router, RouteComponentProps } from "@reach/router";
import HomePage from "./Homepage";
import FavoritesPage from "./FavoritesPage";

const RouterPage = (props: {pageComponent: JSX.Element} & RouteComponentProps) => props.pageComponent

export default function Index(): JSX.Element {
  return (
    <StoreProvider>
      <Router>
        <App path="/">
          <RouterPage pageComponent={<HomePage />} path={'/'} />
          <RouterPage pageComponent={<FavoritesPage />} path={'/favorites'} />
        </App>
      </Router>
    </StoreProvider>
  );
}

const root = document.getElementById("app-root");

ReactDOM.render(<Index />, root);
