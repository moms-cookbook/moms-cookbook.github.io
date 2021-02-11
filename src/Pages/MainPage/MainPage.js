import React from 'react';
import './MainPage.css';
import  Popular from './../../ReactComponents/Popular'


class MainPage extends React.Component {
  componentDidMount(){
    document.title = "Main Page"
  }
  render() {
    return (
      <div className="screen">
        <Popular></Popular>
      </div>
    );
  }
}

export default MainPage;
