import React from 'react';
import { 
    Button, 
    Row, 
    Col,
    CardGroup,
    Card,
    CardImg,
    CardBody,
    CardTitle
} from 'reactstrap';
import thumbnails from '../../thumbnails.json';
import buttons from '../../buttons.json';
import ThumbnailCards from '../../Components/ThumbnailCards/ThumbnailCards';
import FilterButton from '../../Components/FilterButton/FilterButton';
import './ThumbnailContainer.css';

export default class ThumbnailContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            thumbnails,
            buttons
        }
    }

    filterByCategory = category => {
        this.setState({thumbnails: this.state.thumbnails.filter(thumbnail => thumbnail.category == category)})
    }

    // removeFriend = id => {
    //     // Filter this.state.friends for friends with an id not equal to the id being removed
    //     const friends = this.state.friends.filter(friend => friend.id !== id);
    //     // Set this.state.friends equal to the new friends array
    //     this.setState({ friends });
    //   };

    render() {
        let thumbnailCards = this.state.thumbnails.map(thumbnails => {
            return (
                <Col md={{size: 3}}>
                    <ThumbnailCards thumbnails={thumbnails} />
                </Col>
            )
        })

        let categoryButtons = this.state.buttons.map(buttons => {
            return (
                <Col md={3}>
                    <FilterButton buttons={buttons} onClick={this.filterByCategory}/> 
                </Col>
            )
        })

        return (
            <div className="thumbnailContainer">
                <Row>
                    {categoryButtons}
                </Row>
                <Row>
                    {thumbnailCards}
                </Row>
            </div>
            );
        }
    }