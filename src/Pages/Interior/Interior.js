import React, { Component } from 'react';
import { 
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink, 
  Card,
  CardImg, 
  Button, 
  CardTitle, 
  CardText, 
  Row, 
  Col 
} from 'reactstrap';
import classnames from 'classnames';
import './Interior.css'
import { Link } from 'react-router-dom';
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
        Interior Page.
      
          <InteriorServiceContainer />
      </div>
    )
  }
}