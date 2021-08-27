import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          exact
          activeStyle={{ color: "red" }}
          className="nav-link"
        >
          Popular
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/battle"
          exact
          activeStyle={{ color: "red" }}
          className="nav-link"
        >
          Battle
        </NavLink>
      </li>
    </ul>
  );
}
