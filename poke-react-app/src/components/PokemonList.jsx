import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ onSelectPokemon }) => {
  const [randomPokemons, setRandomPokemons] = useState([]);

  const generateRandomIds = (num) => {
    const ids = [];
    while (ids.length < num) {
      const id = Math.floor(Math.random() * 1000) + 1;
      if (!ids.includes(id)) ids.push(id);
    }
    return ids;
  };

  const fetchPokemons = async () => {
    const ids = generateRandomIds(12);
    try {
      const fetchPromises = ids.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((response) =>
          response.json()
        )
      );
      const pokemons = await Promise.all(fetchPromises);
      setRandomPokemons(pokemons);
    } catch (error) {
      console.error("There is an error with pokemon fetch:", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <button onClick={() => fetchPokemons()}>Yenile</button>
      <Container className="d-flex justify-content-center">
        <Row
          xs={3}
          md={4}
          lg={6}
          className="g-4"
        >
          {randomPokemons.map((pokemon, i) => (
            <PokemonCard
              key={i}
              pokemon={pokemon}
              onSelectPokemon={onSelectPokemon}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PokemonList;
