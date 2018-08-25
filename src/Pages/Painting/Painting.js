//Importing necessary dependancies and components
import React, { Component } from 'react';
import { 
TabContent, 
TabPane, 
Card,
CardImg, 
Button, 
CardTitle, 
Row, 
Col,
Collapse 
} from 'reactstrap';
import InteriorSideNav from '../../Components/InteriorSideNav/InteriorSideNav';
import CollapseInfoPanel from '../../Components/CollapseInfoPanel/CollapseInfoPanel';

//creating component
export default class Painting extends Component {
constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.toggleInfo = this.toggleInfo.bind(this);
  this.state = {
    activeTab: '1',
    collapse: false
  };
}

//handling toggle function for tabs
toggle(tab) {
  if (this.state.activeTab !== tab) {
    this.setState({
      activeTab: tab
    });
  }
}

toggleInfo() {
  this.setState({
      collapse: !this.state.collapse
  });
}

render() {
  return (
      <div style={{marginBottom: '20px'}}>
      
      {/* Interior side Navigation component and Card Img with info of current page */}
      <Row>
        <Col md={{size: 3, offset: 1}}>
          <InteriorSideNav />
        </Col>
        <Col md={{size: 6, offset: 1}}>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
                  <Card body>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardTitle>Painting</CardTitle>
                    <Button onClick={this.toggleInfo}>More Information</Button>
                  </Card>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
              <Collapse 
                isOpen={this.state.collapse} 
                style={{ marginBottom: '1rem', marginTop: '1rem' }}
              >
                  <CollapseInfoPanel />
              </Collapse>
          </div>
        </Col>
      </Row>
    </div>
    )
  }
}