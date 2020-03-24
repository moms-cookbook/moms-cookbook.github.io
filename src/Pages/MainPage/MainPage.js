import React from 'react';
import './MainPage.css';
import RecipeBox from '../../ReactComponents/RecipeBox';
import Popular from '../../ReactComponents/Popular';

class MainPage extends React.Component {
  componentDidMount(){
    document.title = "Main Page"
  }
  render() {
    return (
      <div className="screen">
        <Popular></Popular>
        <RecipeBox></RecipeBox>
      </div>
    );
  }
}

export default MainPage;
