import React, { Component } from 'react';
import ExteriorServiceContainer from '../../Components/ExteriorServiceContainer/ExteriorServiceContainer';

export default class Exterior extends Component {
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
        Exterior Page.
      
          <ExteriorServiceContainer />
      </div>
    )
  }
}