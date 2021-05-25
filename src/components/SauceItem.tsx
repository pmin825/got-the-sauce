import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <div key={drink.idDrink}>
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={`${drink.strDrinkThumb}`} />
                <Card.Body>
                  <Card.Title>{drink.strDrink}</Card.Title>
                  <Link to={`/${drink.idDrink}`}>
                    <Button variant="primary">See Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default SauceItem;
