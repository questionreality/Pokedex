import React from "react";
import Pokemon from "./Pokemon";
import Pokedex from "./Pokedex";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Pokedex {...props} />}></Route>
      <Route
        exact
        path="/:pokemonId"
        render={(props) => <Pokemon {...props} />}
      ></Route>
    </Switch>
  );
}

export default App;
