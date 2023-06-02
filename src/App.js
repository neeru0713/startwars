// App.js
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './components/Home';
import {MovieDetail} from './components/MovieDetail';
import {ActorDetail} from './components/ActorDetail';
import {StarshipDetail} from './components/StarshipDetail';
import {PlanetDetail} from './components/PlanetDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"  >
          <Home/>
        </Route>

        <Route exact path="/movies/:id">
          <MovieDetail/>
        </Route>

        <Route exact path="/actors/:id"  >
          <ActorDetail/>
        </Route>

        <Route exact path="/starships/:id"  >
          <StarshipDetail/>
        </Route>

        <Route exact path="/planets/:id"  >
          <PlanetDetail/>
        </Route>

      </Switch>
    </Router>
  );
};

export default App;
