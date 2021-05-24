import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

interface SauceItemProps {
    drinks: { idDrink: string; strDrink: string; strDrinkThumb: string }[];
}

const SauceItem: React.FC<SauceItemProps> = (props) => {
    return (
        <Container>
            <Row>
                {props.drinks.map((drink) => {
                    return (
                        <Card style={{ width: "20rem" }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{drink.strDrink}</Card.Title>
                                <Card.Text>{drink.idDrink}</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </Row>
        </Container>
    );
};

export default SauceItem;
