import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import classnames from "classnames";
import queryString from "@/utils/queryString";
import Col from "react-bootstrap/Col";
import PlayerForm from "./PlayerForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faAirFreshener,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import style from "./battle.less";

const presetPlayersInstance = [
  {
    labelFor: "playerone",
    placeholder: "Palyer One Username",
    text: "Player One",
  },
  {
    labelFor: "playertwo",
    placeholder: "Palyer Two Username",
    text: "Player Two",
  },
];

const presetRuleBlocks = [
  {
    text: "Enter two Github users",
    icon: faUserFriends,
    color: "rgb(255, 191, 116)",
  },
  {
    text: "Battle",
    icon: faAirFreshener,
    color: "rgb(114, 114, 114)",
  },
  {
    text: "See the winner",
    icon: faTrophy,
    color: "rgb(255, 215, 0)",
  },
];

export default function Battle() {
  const history = useHistory();
  const playerFromRef = useRef({});
  const [playersInstance] = useState(presetPlayersInstance);

  const jumpBattleResult = () => {
    const querystring = queryString.objectToQueryString(playerFromRef.current);
    const targetURL = `/result${querystring && "?" + querystring}`;
    history.push(targetURL);
  };

  return (
    <Container className="mt-4">
      <Row className="clear-row">
        <h1 className="text-center mt-2 header-lg">Instructions</h1>
        <ul className={classnames("row text-center my-4", style.containerSm)}>
          {presetRuleBlocks?.map((ruleBlock) => {
            return (
              <Col
                className="col-lg-4 col-12 d-flex flex-column align-items-center justify-content-center"
                key={ruleBlock?.text}
              >
                <h4 className="header-sm">{ruleBlock?.text}</h4>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.10)",
                    padding: "3.5rem 5rem",
                  }}
                >
                  <FontAwesomeIcon
                    icon={ruleBlock?.icon}
                    size="6x"
                    color={ruleBlock?.color}
                  />
                </div>
              </Col>
            );
          })}
        </ul>
      </Row>

      <Row className="clear-row">
        <h1 className="text-center mt-2 mb-5 header-lg">Players</h1>
        <Row className={classnames("clear-row space-around")}>
          {playersInstance.map((player, index) => (
            <PlayerForm {...player} key={index} ref={playerFromRef} />
          ))}
        </Row>
      </Row>

      <div className="text-center my-4">
        <button onClick={jumpBattleResult} className="btn btn-dark">
          Battle
        </button>
      </div>
    </Container>
  );
}
