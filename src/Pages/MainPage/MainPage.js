import React from 'react';
import './MainPage.css';
import RecipeBox from '../../ReactComponents/RecipeBox';
import Popular from '../../ReactComponents/Popular';

function MainPage() {
  return (
      <div className="screen">
        <Popular></Popular>
        <RecipeBox></RecipeBox>
      </div>
  );
}

export default MainPage;
