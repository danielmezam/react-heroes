import React from "react";

//REACT ROUTER
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Containers
import Home from "../containers/Home";
import HeroDetails from "../containers/HeroDetails";

//Layout para no repetir componentes dentro de él
import Layout from "../components/Layout";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hero/:id" component={HeroDetails} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
