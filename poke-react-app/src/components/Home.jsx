import React, { useState } from "react";
import Participants from "./Participants";
import PokemonList from "./PokemonList";
import { Button, Container } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ShowBattleResult from "./ShowBattleResult";

const Home = () => {
  const navigate = useNavigate();

  const [attacker, setAttacker] = useState(null);
  const [defender, setDefender] = useState(null);
  const [winnerId, setWinnerId] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSelectPokemon = (pokemon) => {
    if (!attacker) {
      setAttacker(pokemon);
    } else if (!defender) {
      setDefender(pokemon);
    }
  };

  const startBattle = async () => {
    try {
      const bodyData = {
        attacker: attacker.id,
        defender: defender.id,
      };

      setLoading(true);

      const fetchResponse = await fetch(
        `http://localhost:8080/api/v1/battle/start`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        }
      );

      if (!fetchResponse.ok) {
        throw new Error("Network response failed!");
      }

      const data = await fetchResponse.json();
      setWinnerId(data.winnerId);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (winnerId) {
    return (
      <ShowBattleResult
        winner={attacker.id === winnerId ? attacker : defender}
      />
    );
  }

  return (
    <div className="App flex-column">
      <Participants
        attacker={attacker}
        defender={defender}
        setAttacker={setAttacker}
        setDefender={setDefender}
      />
      <Container className="d-flex flex-column mt-3 mb-3">
        <Button
          onClick={startBattle}
          disabled={!attacker || !defender || loading}
          variant="success"
          className="m-2"
        >
          {loading ? "Loading..." : "Start Battle"}
        </Button>
        <Button
          className="m-2"
          variant="secondary"
          onClick={() => navigate("/allbattleresults")}
        >
          See All Battle Results
        </Button>
      </Container>
      <PokemonList onSelectPokemon={onSelectPokemon} />
    </div>
  );
};

export default Home;
