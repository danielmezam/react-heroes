import React, { useState, useEffect } from "react";

//React Router
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

//Chart js
import { Doughnut } from "react-chartjs-2";

//Styles

import "../assets/static/styles/Details.css";

//Components

import Loader from "../components/Loader";

const HeroDetails = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({
    response: "",
    name: "",
    powerstats: {
      intelligence: "",
      strength: "",
      speed: "",
      durability: "",
      power: "",
      combat: ""
    },
    biography: {
      publisher: ""
    },
    image: {
      url: ""
    }
  });

  const fetchAPI = async () => {
    //Mostrar loading mientras se consulta el API
    setLoading(true);

    //Traer información con el id del héroe que viene desde el router con el prop match
    try {
      const API = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10220588968268520/${match.params.id}`;
      const response = await fetch(API);
      const data = await response.json();
      setDetails(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  //Arrays para información de la gráfica
  const graphicLabels = Object.keys(details.powerstats);
  const powerData = Object.values(details.powerstats);

  const graphicData = {
    labels: graphicLabels,
    datasets: [
      {
        label: "Power",
        data: powerData,
        backgroundColor: [
          "rgba(236, 112, 99, 0.2)",
          "rgba(142, 68, 173, 0.2)",
          "rgba(41, 128, 185, 0.2)",
          "rgba( 6, 188, 156 , 0.2)",
          "rgba(243, 156, 18, 0.2)",
          "rgba(238, 190, 238, 0.2)"
        ],
        borderColor: [
          "rgba(236, 112, 99, 1)",
          "rgba(142, 68, 173, 1)",
          "rgba(41, 128, 185, 1)",
          "rgba( 6, 188, 156 , 1)",
          "rgba(243, 156, 18, 1)",
          "rgba(238, 190, 238, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  return loading ? (
    <Loader />
  ) : (
    <React.Fragment>
      <div className="hero-details-container">
        <div className="hero-details-section">
          <div className="col d-flex justify-content-center mt-4">
            <Card className="hero-card-details">
              <Card.Img
                variant="top"
                src={details.image.url}
                className="hero-img-details"
              />
              <Card.Body>
                <Card.Title>{details.name}</Card.Title>
                <Card.Text>publisher: {details.biography.publisher}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="hero-details-section">
          <h2 className="text-center">Estadísticas de {details.name}</h2>
          <Doughnut data={graphicData} />
          <Link to="/" className="text-center mt-4">
            <p>Regresar</p>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroDetails;
