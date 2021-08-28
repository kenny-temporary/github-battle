import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import classnames from "classnames";
import Col from "react-bootstrap/Col";
import PlayerForm from "./PlayerForm";

import style from "./battle.less";

export default function Battle() {
  const playerFromRef = useRef({});
  const history = useHistory();

  const jumpBattleResult = () => {
    history.push(
      `/result?playerone=${playerFromRef?.current?.playerone}&playertwo=${playerFromRef?.current?.playertwo}`
    );
  };

  return (
    <Container className="mt-5">
      <Row>
        <h1 className="text-center mt-4 header-lg">Instructions</h1>
        <ul className={classnames("row text-center my-5", style.containerSm)}>
          <Col>
            <h3 className="header-sm">Enter two Github users</h3>
          </Col>
          <Col>
            <h3 className="header-sm">Battle</h3>
          </Col>
          <Col>
            <h3 className="header-sm">See the winner</h3>
          </Col>
        </ul>
      </Row>

      <Row>
        <h1 className="text-center mt-4 header-lg">Players</h1>
        <ul className={classnames("row row space-around", style.containerSm)}>
          <Col>
            {[
              { labelFor: "playerone", placeholder: "Palyer One Username" },
              { labelFor: "playertwo", placeholder: "Palyer Two Username" },
            ].map((player, index) => (
              <PlayerForm {...player} key={index} ref={playerFromRef} />
            ))}
          </Col>
        </ul>
      </Row>

      <div className="text-center">
        <button onClick={jumpBattleResult}>Battle</button>
      </div>
    </Container>
  );
}
