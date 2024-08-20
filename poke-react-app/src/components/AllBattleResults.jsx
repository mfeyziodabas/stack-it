import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import BattleResult from "./BattleResult";
import { useNavigate } from "react-router-dom";

const AllBattleResults = () => {
  const [battleResults, setBattleResults] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchAllBattleResults = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/battle/result`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setBattleResults(data);
    } catch (error) {
      setError(error.message);
      console.error("Fetch error: ", error);
    }
  };

  useEffect(() => {
    fetchAllBattleResults();
  }, []);

  return (
    <div>
      <Container className="d-flex flex-column justify-content-center border mt-2">
        <Button
          className="mt-3"
          onClick={() => navigate("/")}
        >
          HOME
        </Button>
        {battleResults.map((battleResult, i) => (
          <BattleResult
            key={battleResult.battleId}
            battleResult={battleResult}
          />
        ))}
      </Container>
    </div>
  );
};

export default AllBattleResults;
