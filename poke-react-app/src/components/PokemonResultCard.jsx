import React from "react";
import { Card, Col } from "react-bootstrap";

const PokemonResultCard = ({ pokemon, isWinner }) => {
  if (!pokemon) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Col>
        {isWinner ? (
          <Card
            className="h-100 bg-success"
            Card
            width={200}
          >
            <Card.Img
              variant="top"
              src={
                pokemon.sprites?.front_default ||
                pokemon.sprites?.front_shiny ||
                "https://via.placeholder.com/100?text=No+Image"
              }
              height={200}
            />
            <Card.Body>
              <Card.Title>{pokemon.name}</Card.Title>
              <Card.Text>Winner</Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <Card
            className="h-100 bg-danger"
            Card
            width={200}
          >
            <Card.Img
              variant="top"
              src={
                pokemon.sprites?.front_default ||
                pokemon.sprites?.front_shiny ||
                "https://via.placeholder.com/100?text=No+Image"
              }
              height={200}
            />
            <Card.Body>
              <Card.Title>{pokemon.name}</Card.Title>
              <Card.Text>Loser</Card.Text>
            </Card.Body>
          </Card>
        )}
      </Col>
    </>
  );
};

export default PokemonResultCard;
