import React, { Component } from 'react';
import './Interior.css'
import InteriorServiceContainer from '../../Components/InteriorServiceContainer/InteriorServiceContainer';

export default class DesignBuild extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
    
  render() {
    return ( 
      <div>
          <InteriorServiceContainer />
      </div>
    )
  }
}