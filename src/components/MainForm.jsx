import React from "react";

//STYLES

import "../assets/static/styles/MainForm.css";

//Props para manipular Home
const MainForm = ({ heroForm, setHeroForm, setHeroName }) => {
  //Cuando se escriba en el input (actualizar state en home)
  const handleChange = ev => {
    setHeroForm(ev.target.value);
  };

  //Cuando se hace submit, pasamos el valor del formulario a SetHeroName para ejecutar useEffect de nuevo en el home
  const handleSubmit = ev => {
    ev.preventDefault();
    setHeroName(heroForm);
  };

  return (
    <div className="main-form">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe el nombre del héroe"
          className="main-input"
          name="HeroName"
          onChange={handleChange}
        />
        <input type="submit" value="¡Buscar Héroe!" className="submit-input" />
      </form>
    </div>
  );
};

export default MainForm;
