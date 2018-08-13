import React, {Component} from 'react';
import { Card, 
    CardImg,  
    CardBody,
    CardTitle, 
    CardGroup, 
    Button } from 'reactstrap';

// creating service cards component
class ThumbnailCards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CardGroup>
          <Card 
            className='thumbnailCards' 
            style={{marginBottom: '3rem', marginTop: '3rem'}} 
            data-category={this.props.thumbnails.category}
          >
            <CardImg top width="100%" src={this.props.thumbnails.url} alt="Card image cap" />
            <CardBody>
              <CardTitle>{this.props.thumbnails.category}</CardTitle>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  };
};

export default ThumbnailCards;