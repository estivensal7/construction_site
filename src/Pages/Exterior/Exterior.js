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
        Exterior Page.
        <Row>
          <Col md={{size: 3, offset: 1}}>
            <Nav vertical>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    Landscaping
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    Patio Covers
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}
                  >
                    Concrete & Hardscapes
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '4' })}
                    onClick={() => { this.toggle('4'); }}
                  >
                    Outdoor Living Spaces
                  </NavLink>
                </NavItem>
            </Nav>
          </Col>


        <Col md={{size: 6, offset: 1}}>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
                <Card body>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardTitle>Landscaping</CardTitle>
                  <Button tag='a' href='/landscaping'>More Information</Button>
                </Card>
          </TabPane>
          <TabPane tabId="2">
                <Card body>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardTitle>Patio Covers</CardTitle>
                  <Button tag='a' href='/patio-covers'>More Information</Button>
                </Card>
          </TabPane>
          <TabPane tabId="3">
                <Card body>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardTitle>Concrete & Hardscapes</CardTitle>
                  <Button tag='a' href='/concrete-hardscapes'>More Information</Button>
                </Card>
          </TabPane>
          <TabPane tabId="4">
                <Card body>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardTitle>Outdoor Living Spaces</CardTitle>
                  <Button tag='a' href='/outdoor-living-spaces'>More Information</Button>
                </Card>
          </TabPane>
        </TabContent>
        </Col>
        </Row>
      </div>
    )
  }
}