import React from "react";
import BattleResult from "./BattleResult";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ShowBattleResult = ({ winner }) => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <BattleResult battleResult={winner} />
      <Button
        className="mt-3"
        onClick={() => window.location.reload()}
      >
        HOME
      </Button>
    </div>
  );
};

export default ShowBattleResult;
