import React from "react";
import { Card, Col } from "react-bootstrap";
import "./../App.css";

const PokemonCard = ({ pokemon, onSelectPokemon }) => {
  return (
    <>
      <Col
        onClick={() => onSelectPokemon(pokemon)}
        className="hover mb-2 mt-2"
      >
        <Card className="h-100">
          <Card.Img
            variant="top"
            src={
              pokemon.sprites?.front_default ||
              pokemon.sprites?.front_shiny ||
              "https://via.placeholder.com/100?text=No+Image"
            }
          />
          <Card.Body>
            <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
            <Card.Text>Weight: {pokemon.weight}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default PokemonCard;
