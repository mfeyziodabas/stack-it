import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PokemonResultCard from "./PokemonResultCard";

const BattleResult = ({ battleResult }) => {
  const [winnerPokemon, setWinnerPokemon] = useState(null);
  const [loserPokemon, setLoserPokemon] = useState(null);

  const fetchPokemon = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      if (!response.ok) {
        throw new Error("Failed to fetch pokemon data");
      }
      const pokemon = await response.json();
      return pokemon;
    } catch (error) {
      console.error("There is an error with pokemon fetch:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchPokemonsData = async () => {
      const winner = await fetchPokemon(battleResult.winnerId);
      const loser = await fetchPokemon(battleResult.loserId);
      setWinnerPokemon(winner);
      setLoserPokemon(loser);
    };

    fetchPokemonsData();
  }, [battleResult]);

  return (
    <Container className="d-flex justify-content-center mt-5 border">
      <Row className="align-items-center">
        <Col md="auto">
          {winnerPokemon && (
            <PokemonResultCard
              pokemon={winnerPokemon}
              isWinner={true}
            />
          )}
        </Col>
        <Col md="auto">
          {new Date(battleResult.battleDate).toLocaleTimeString()}
        </Col>
        <Col md="auto">
          {loserPokemon && (
            <PokemonResultCard
              pokemon={loserPokemon}
              isWinner={false}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default BattleResult;
