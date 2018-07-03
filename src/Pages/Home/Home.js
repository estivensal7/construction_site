import React, { Component } from 'react';
import HeaderCarousel from '../../Components/Carousel/Carousel.js';
import InfoPanel from '../../Components/InfoPanel/InfoPanel.js';
import JumboContainer from '../../Components/JumboContainer/JumboContainer.js';
import Cards from '../../Components/Cards/Cards.js';

export default class Home extends Component {
    render() {
      return (
        <div> Home Page.
          <HeaderCarousel />
          <InfoPanel />
          <JumboContainer>
            <h1 className="display-3">Our Services</h1>
          </JumboContainer>
        </div>
      )
    }
  }