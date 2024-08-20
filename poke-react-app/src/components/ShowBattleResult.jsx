import React from "react";
import BattleResult from "./BattleResult";
import { Button } from "react-bootstrap";

const ShowBattleResult = ({ winner }) => {
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
