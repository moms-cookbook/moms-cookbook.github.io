import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from './Pages/MainPage/MainPage'
import Nav from './Pages/Nav/Nav'
import Recipe from './Pages/Recipe/Recipe'
import AddRecipe from './Pages/AddRecipe/AddRecipe'
import SignUp from './Pages/SignUp/SignUp'

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/recipe/:id" component={Recipe} />
        <Route exact path="/addrecipe" component={AddRecipe} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
