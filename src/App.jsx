import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import RouteProvider from "./RouteProvider";

export default function App() {
  return (
    <Router>
      <Nav />
      <RouteProvider />
    </Router>
  );
}
