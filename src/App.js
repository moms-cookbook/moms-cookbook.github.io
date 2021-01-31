import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from './Pages/Nav/Nav'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={require('./Pages/MainPage/MainPage').default} />
          <Route exact path="/recipe/:id" component={require('./Pages/Recipe/Recipe').default} />
          <Route exact path="/addrecipe" component={require('./Pages/AddRecipe/AddRecipe').default} />
          <Route exact path="/signup" component={require('./Pages/SignUp/SignUp').default} />
          <Route exact path="/profile" component={require('./Pages/Profile/Profile').default} />
          <Route exact path="/login" component={require('./Pages/Login/Login').default} />
        </Switch>
      </Router>
    );
  }
}

export default App;
