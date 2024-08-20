import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import questionMark from "../logos/question-mark.svg";

const Participants = ({ attacker, defender, setAttacker, setDefender }) => {
  return (
    <div>
      <Container className="d-flex justify-content-center mt-5 border">
        <Row className="align-items-center">
          <Col md="auto">
            {attacker ? (
              <Card width={200}>
                <Card.Img
                  src={
                    attacker.sprites?.front_default ||
                    attacker.sprites?.front_shiny ||
                    "https://via.placeholder.com/100?text=No+Image"
                  }
                  height={200}
                />
                <Card.Body>
                  <Card.Title>{attacker.name.toUpperCase()}</Card.Title>
                  <Card.Text>Attacker</Card.Text>
                  <Button onClick={() => setAttacker(null)}>Remove</Button>
                </Card.Body>
              </Card>
            ) : (
              <Card width={200}>
                <Card.Img
                  height={200}
                  src={questionMark}
                />
                <Card.Body>
                  <Card.Title>Attacker</Card.Title>
                  <Card.Text>Pls Choose</Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>
          <Col md="auto">VS</Col>
          <Col md="auto">
            {defender ? (
              <Card width={200}>
                <Card.Img
                  src={
                    defender.sprites?.front_default ||
                    defender.sprites?.front_shiny ||
                    "https://via.placeholder.com/100?text=No+Image"
                  }
                  height={200}
                />
                <Card.Body>
                  <Card.Title>{defender.name.toUpperCase()}</Card.Title>
                  <Card.Text>Defender</Card.Text>
                  <Button onClick={() => setDefender(null)}>Remove</Button>
                </Card.Body>
              </Card>
            ) : (
              <Card width={200}>
                <Card.Img
                  height={200}
                  src={questionMark}
                />
                <Card.Body>
                  <Card.Title>Defender</Card.Title>
                  <Card.Text>Pls Choose</Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Participants;
