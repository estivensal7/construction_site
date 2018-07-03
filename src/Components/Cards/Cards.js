import React, {Component} from 'react';
import { Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle,
    CardGroup, 
    Button } from 'reactstrap';
import './Cards.css';

class Cards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CardGroup>
          <Card className='serviceCards'>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>{this.props.services.type}</CardTitle>
              <Button>Info</Button>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  };
};

export default Cards;