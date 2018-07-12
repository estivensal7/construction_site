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
import InteriorSideNav from '../../Components/InteriorSideNav/InteriorSideNav';

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
        <Row>
          <Col md={{size: 3, offset: 1}}>
            <InteriorSideNav />
          </Col>


        <Col md={{size: 6, offset: 1}}>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
                <Card body>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardTitle>Design & Build Remodeling Services</CardTitle>
                  <Button tag='a' href='/design-build-remodeling'>More Information</Button>
                </Card>
          </TabPane>
          <TabPane tabId="2">
                <Card body>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardTitle>Kitchen Remodeling</CardTitle>
                  <Button tag='a' href='/kitchen-remodeling'>More Information</Button>
                </Card>
          </TabPane>
          <TabPane tabId="3">
                <Card body>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardTitle>Bathroom Remodeling</CardTitle>
                  <Button tag='a' href='/bathroom-remodeling'>More Information</Button>
                </Card>
          </TabPane>
          <TabPane tabId="4">
                <Card body>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardTitle>Custom Cabinets</CardTitle>
                  <Button tag='a' href='/custom-cabinets'>More Information</Button>
                </Card>
          </TabPane>
          <TabPane tabId="5">
                <Card body>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardTitle>Wood Working</CardTitle>
                  <Button tag='a' href='/wood-working'>More Information</Button>
                </Card>
          </TabPane>
          <TabPane tabId="6">
                <Card body>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardTitle>Painting</CardTitle>
                  <Button tag='a' href='/painting'>More Information</Button>
                </Card>
          </TabPane>
          <TabPane tabId="7">
                <Card body>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardTitle>Room Additions</CardTitle>
                  <Button tag='a' href='/room-additions'>More Information</Button>
                </Card>
          </TabPane>
          <TabPane tabId="8">
                <Card body>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardTitle>Residential Construction</CardTitle>
                  <Button tag='a' href='/residential-construction'>More Information</Button>
                </Card>
          </TabPane>
          <TabPane tabId="9">
                <Card body>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardTitle>Commercial Construction</CardTitle>
                  <Button tag='a' href='/commercial-construction'>More Information</Button>
                </Card>
          </TabPane>
          <TabPane tabId="10">
                <Card body>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardTitle>General Contractor</CardTitle>
                  <Button tag='a' href='/general-contractor'>More Information</Button>
                </Card>
          </TabPane>
        </TabContent>
        </Col>
        </Row>
      </div>
    )
  }
}