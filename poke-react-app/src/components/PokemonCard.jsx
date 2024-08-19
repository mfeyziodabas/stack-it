import React from "react";
import { Card, Col } from "react-bootstrap";

const PokemonCard = ({ pokemon, onSelectPokemon }) => {
  return (
    <>
      <Col onClick={() => onSelectPokemon(pokemon)}>
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
            <Card.Title>{pokemon.name}</Card.Title>
            <Card.Text>Weight: {pokemon.weight}</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* <Card
        className="border d-flex"
        heigth={150}
        width={400}
      >
        
        <Col>
          <Image
            src={
              pokemon.sprites.front_default ||
              pokemon.sprites.front_shiny ||
              "https://via.placeholder.com/100?text=No+Image"
            }
            heigth={100}
          />
        </Col>
        <Col>
          <Card>
            <Card.Title>Name: {pokemon.name}</Card.Title>
            <Card.Text>Weight: {pokemon.weight}</Card.Text>
          </Card>
        </Col>
      </Card> */}
    </>
  );
};

export default PokemonCard;
