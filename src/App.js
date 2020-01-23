import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from './Pages/MainPage/MainPage'
import Nav from './Pages/Nav/Nav'
import Recipe from './Pages/Recipe/Recipe'

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/recipe/:id" component={Recipe} />
        
      </Switch>
    </Router>
  );
}

export default App;
