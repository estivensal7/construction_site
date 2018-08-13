import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Main from './Components/Main/Main.js';
import Footer from './Components/Footer/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
