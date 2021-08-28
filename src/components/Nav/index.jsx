import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import classnames from "classnames";
import style from "./index.less";

export default function Nav() {
  return (
    <Container className="mt-5">
      <div className={classnames("d-flex my-2", style.navLinkContainer)}>
        <NavLink to="/" exact activeStyle={{ color: "rgb(187, 46, 31)" }}>
          Popular
        </NavLink>
        <NavLink to="/battle" exact activeStyle={{ color: "rgb(187, 46, 31)" }}>
          Battle
        </NavLink>
      </div>
    </Container>
  );
}
