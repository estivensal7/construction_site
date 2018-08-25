import React, { Component } from 'react';
import HeaderCarousel from '../../Components/Carousel/Carousel.js';
import InfoPanel from '../../Components/InfoPanel/InfoPanel.js';
import JumboContainer from '../../Components/JumboContainer/JumboContainer.js';

export default class Home extends Component {
    render() {
      return (
        <div>
          <HeaderCarousel />
          <InfoPanel />
          <hr style={{margin: '0px'}}/>
          <JumboContainer>
            <h1 className="display-3">Our Services</h1>
          </JumboContainer>
        </div>
      )
    }
  }