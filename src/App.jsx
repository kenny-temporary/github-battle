import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import RouteProvider from "./router/RouteProvider";

export default function App() {
  return (
    <Router>
      <Nav />
      <RouteProvider />
    </Router>
  );
}
