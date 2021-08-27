import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import RouteProvider from "./RouteProvider";

const isProd = process.env.NODE_ENV === "production";

export default function App() {
  return (
    <Router basename={isProd ? "/github-battle" : "/"}>
      {JSON.stringify(isProd)}
      <Nav />
      <RouteProvider />
    </Router>
  );
}
