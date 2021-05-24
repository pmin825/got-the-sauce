import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import "./SauceItem.css";

interface SauceItemProps {
  drinks: { idDrink: string; strDrink: string; strDrinkThumb: string }[];
}

const SauceItem: React.FC<SauceItemProps> = (props) => {
  return (
    <Container>
      <Row>
        {props.drinks.map((drink) => {
          return (
            <Card key={drink.idDrink} style={{ width: "15rem" }}>
              <Card.Img variant="top" src={`${drink.strDrinkThumb}`} />
              <Card.Body>
                <Card.Title>{drink.strDrink}</Card.Title>
                <Button variant="primary">See Details</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default SauceItem;
