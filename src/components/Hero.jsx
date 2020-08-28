import React from "react";

//React Router
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

//Styles
import "../assets/static/styles/Hero.css";

const Hero = ({ Hero }) => {
  //Usar información del héroe que viene de props

  return (
    <div className="col  d-flex justify-content-center mt-4 ">
      <Card className="hero-card">
        <Card.Img variant="top" src={Hero.image.url} className="hero-img" />
        <Card.Body>
          <Card.Title>{Hero.name}</Card.Title>
          <Card.Text></Card.Text>
          <Link to={`/hero/${Hero.id}`}>
            <Button variant="dark">Saber más</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Hero;
