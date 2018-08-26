import React, { Component } from 'react';
import ThumbnailContainer from '../../Components/ThumbnailContainer/ThumbnailContainer';
import './Gallery.css';

export default class Gallery extends Component {
    render() {
      return (
        <div className="gallery-container"> 
            <ThumbnailContainer />
        </div>
      )
    }
  }