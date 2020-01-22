 import React from 'react';
import './App.css';
import RecipeBox from './RecipeBox';
import Popular from './Popular';

function App() {
  return (
    <div className="app-container">
      <nav>
        <h2>Reyhan</h2>
        <ul>
           <li>About</li>
           <li>MainPage</li>
           <li>Contact</li>
        </ul>
      </nav>
      <div className="screen">
        <Popular></Popular>
        <RecipeBox></RecipeBox>
      </div>
    </div>
  );
}

export default App;
