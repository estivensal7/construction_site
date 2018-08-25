import React from 'react';
import { TabContent, TabPane, Button, Row, Col, Jumbotron } from 'reactstrap';
import classnames from 'classnames';
import './About.css'

export default class About extends React.Component {
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
      <div className="jumbotron-container aboutContainer">
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1" className="aboutTabPane">
                <Jumbotron className="jumbotron aboutJumbo">
                  <h1 className="display-3">Hello, 1</h1>
                  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                  <p className="lead">
					<Button 
						className={classnames({ active: this.state.activeTab === '2' })}
						onClick={() => { this.toggle('2'); }} 
						color= "primary"
					>Learn More
					</Button>
                  </p>
                </Jumbotron>
          </TabPane>
          <TabPane tabId="2" className="aboutTabPane">
                <Jumbotron className="jumbotron aboutJumbo">
                  <h1 className="display-3">Hello, 2</h1>
                  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                  <p className="lead">
				  <Button 
						className={classnames({ active: this.state.activeTab === '3' })}
						onClick={() => { this.toggle('3'); }} 
						color= "primary"
					>Learn More
				  </Button>
                  </p>
                </Jumbotron>
          </TabPane>
          <TabPane tabId="3" className="aboutTabPane">
                <Jumbotron className="jumbotron aboutJumbo">
                  <h1 className="display-3">Hello, 3</h1>
                  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                  <p className="lead">
				  <Button 
						className={classnames({ active: this.state.activeTab === '1' })}
						onClick={() => { this.toggle('1'); }} 
						color= "primary"
					>Learn More
				  </Button>
                  </p>
                </Jumbotron>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}