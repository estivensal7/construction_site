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
import InteriorSideNav from '../../Components/InteriorSideNav/InteriorSideNav';

export default class Bathroom extends Component {
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
        <div> Bathroom Page.

        <Row>
          <Col md={{size: 3, offset: 1}}>
            <InteriorSideNav />
          </Col>
          <Col md={{size: 6, offset: 1}}>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                    <Card body>
                      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                      <CardTitle>Bathroom</CardTitle>
                      <Button tag='a' href='/design-build-remodeling'>More Information</Button>
                    </Card>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
      )
    }
  }