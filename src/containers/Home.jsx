import React, { useState, useEffect } from "react";

//COMPONENTES
import Header from "../components/Header";
import Loader from "../components/Loader";
import MainForm from "../components/MainForm";
import Hero from "../components/Hero";

const Home = () => {
  //STATE
  const [heroName, setHeroName] = useState("han solo");
  const [hero, setHero] = useState({
    response: "",
    results: [
      {
        id: "",
        name: "",
        powerstats: {
          intelligence: "",
          strength: "",
          speed: "",
          durability: "",
          power: "",
          combat: "",
          biography: {
            publisher: ""
          },
          image: {
            url: ""
          }
        }
      }
    ]
  });
  const [loading, setLoading] = useState(true);
  const [heroForm, setHeroForm] = useState("");

  //HÉROE INICIAL EN HOME
  const fetchAPI = async () => {
    const API = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10220588968268520/search/${heroName}`;

    //Mostrar loading mientras se consulta el API
    setLoading(true);

    try {
      const response = await fetch(API);
      const data = await response.json();
      setHero(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //LLAMAR FETCH API, EJECUTAR CADA VEZ QUE HERONAME CAMBIE DESDE EL FORMULARIO
  useEffect(() => {
    fetchAPI();
  }, [heroName]);

  return (
    <React.Fragment>
      <MainForm
        heroForm={heroForm}
        setHeroName={setHeroName}
        setHeroForm={setHeroForm}
      />

      {hero.response == "error" ? (
        <h2 className="m-auto text-center">No se ecnontraron héroes...</h2>
      ) : !loading ? (
        <Hero Hero={hero.results[0]} />
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};

export default Home;
