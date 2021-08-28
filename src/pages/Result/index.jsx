import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import queryString from "@/utils/queryString";
// import Col from "react-bootstrap/Col";
// import Card from "@/components/Card";
import { queryRepositoryAuthorDetails as queryPlayersDetailsByPlayerName } from "@/services/result";

const WorkProgressStatus = {
  Pendding: "Pendding",

  Check: "Check",
  CheckFailure: "CheckFailure",
  CheckPass: "CheckPass",

  Fetch: "Fetch",
  FetchFailure: "FetchFailure",
  FetchPass: "CheckPass",

  Battle: "Battle",
  BattleFailure: "BattleFailure",
  BattlePass: "BattlePass",
};

export default function BattleResult() {
  const location = useLocation();

  const [[data, errors], setPlayers] = useState([[], []]);
  const [currentworkStatus, setCurrentWorkStatus] = useState({
    status: WorkProgressStatus.Pendding,
    reason: {},
  });

  const generatorPlayerTasksPromise = (players = []) => {
    const tasksPromise = players.map((playerName) =>
      queryPlayersDetailsByPlayerName({ author: playerName })
    );
    return tasksPromise;
  };

  // 并发获取玩家信息
  const concurrencyGetPlayersDetails = useCallback((players = []) => {
    const tasksPromise = generatorPlayerTasksPromise(players);
    setCurrentWorkStatus({ status: WorkProgressStatus.Fetch, reason: {} });

    Promise.allSettled(tasksPromise)
      .then((allPlayersDetails) => {
        console.log("allPlayersDetails -->", allPlayersDetails);
        setPlayers(() => {
          return [allPlayersDetails?.map((player) => player.value?.data), []];
        });
        setCurrentWorkStatus({ status: WorkProgressStatus.Battle, reason: {} });
      })
      .catch((error) => {
        setPlayers([[], Array.from(error)]);
      });
  }, []);

  // 校验玩家
  const checkPlayers = (players = {}) => {
    try {
      setCurrentWorkStatus({ status: WorkProgressStatus.Check, reason: {} });

      const effectivePlayersResult = Object.keys(players).reduce(
        (effectivePlayers, currentPlayer) => {
          if (players[currentPlayer]) {
            effectivePlayers = [...effectivePlayers, players[currentPlayer]];
          }
          return effectivePlayers;
        },
        []
      );

      return {
        effectivePlayers: effectivePlayersResult,
        canBattle: effectivePlayersResult?.length >= 2,
        playersNumber: effectivePlayersResult?.length,
      };
    } catch (error) {
      setCurrentWorkStatus({
        status: WorkProgressStatus.CheckFailure,
        reason: Object(error),
      });
    }
  };

  useEffect(() => {
    // XXX: 使用 URLSearchParams 替代 queryString ?
    // new URLSearchParams(location?.search).entries().next().value;

    const players = queryString.queryStringToObject(location.search);
    const { canBattle, effectivePlayers } = checkPlayers(players);

    if (!canBattle) {
      console.log(
        "can't find enough players --->",
        canBattle,
        effectivePlayers
      );
      return;
    }

    concurrencyGetPlayersDetails(effectivePlayers);
  }, [concurrencyGetPlayersDetails, location]);

  return (
    <Container>
      <Row
        style={{
          width: "80%",
          margin: "auto",
          justifyContent: "center",
          wordBreak: "break-word",
        }}
      >
        Status: {JSON.stringify(currentworkStatus)}
        {/* {[{}, {}].map((user, index) => (
          <Col lg={3} md={4} sm={6} key={index}>
            <Card {...user} />
          </Col>
        ))} */}
        参赛玩家:
        {data.map((player, index) => (
          <div key={index} style={{ marginBottom: "40px" }}>
            {JSON.stringify(player)}
          </div>
        ))}
        出错玩家：
        {errors.map((error, index) => (
          <div key={index}>
            出错玩家{index}: {JSON.stringify(error)}
          </div>
        ))}
      </Row>
    </Container>
  );
}
