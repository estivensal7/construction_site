import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import HeaderCarousel from './Components/Carousel/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <HeaderCarousel />
      </div>
    );
  }
}

export default App;
