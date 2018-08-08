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
import ThumbnailCards from '../../Components/ThumbnailCards/ThumbnailCards';
import FilterButton from '../../Components/FilterButton/FilterButton';

export default class ThumbnailContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            thumbnails,
            buttons: [
                {category: "All"}, 
                {category: "Remodeling Services"}, 
                {category: "Kitchen Remodeling"},
                {category: "Bathroom Remodeling"},
                {category: "Custom Cabinets"},
                {category: "Wood Working"},
                {category: "Room Additions"},
                {category: "Painting"},
                {category: "Residential Construction"},
                {category: "Commercial Construction"},
                {category: "General Contractor"}
            ]
        }
    }

    filterByCategory = category => {
        const thumbnails = this.state.thumbnails.filter(thumbnail => thumbnail.category)
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

        let categoryButtons = this.state.buttons.map(button => {
            return (
                <FilterButton data-category={button.category}>
                    {button.category}
                </FilterButton>
            )
        })

        return (
            <div>
            <Row>
                <Col>
                    {categoryButtons}
                </Col>
                </Row>
                <Row>
                    {thumbnailCards}
                </Row>
                </div>
            );
        }
    }


                    {/* All Images Filter Button
                    <Button 
                        outline 
                        color="secondary"
                        data-category="All"
                    >
                        All
                    </Button>
                    {/* Remodeling Services Images Filter Button */}
                    {/* <Button 
                        outline 
                        color="secondary"
                        data-category="Remodeling Services"
                    >
                        Remodeling Services
                    </Button> */}
                    {/* Kitchen Remodeling Images Filter Button */}
                    {/* <Button 
                        outline 
                        color="secondary"
                        data-category="Kitchen Remodeling"
                    >
                        Kitchen Remodeling
                    </Button> */}
                    {/* Bathroom Remodeling Images Filter Button */}
                    {/* <Button 
                        outline 
                        color="secondary"
                        data-category="Bathroom Remodeling"
                    >
                        Bathroom Remodeling
                    </Button> */}
                    {/* Custom Cabinets Images Filter Button */}
                    {/* <Button 
                        outline 
                        color="secondary"
                        data-category="Custom Cabinets"
                    >
                        Custom Cabinets
                    </Button> */}
                    {/* Wood Working Images Filter Button */}
                    {/* <Button 
                        outline 
                        color="secondary"
                        data-category="Wood Working"
                    >
                        Wood Working
                    </Button> */}
                    {/* Room Additions Images Filter Button */}
                    {/* <Button 
                        outline 
                        color="secondary"
                        data-category="Room Additions"
                    >
                        Room Additions
                    </Button> */}
                    {/* Painting Images Filter Button */}
                    {/* <Button 
                        outline 
                        color="secondary"
                        data-category="Painting"
                    >
                        Painting
                    </Button> */}
                    {/* Residential Construction Images Filter Button */}
                    {/* <Button 
                        outline 
                        color="secondary"
                        data-category="Residential Construction"
                    >
                        Residential Construction
                    </Button> */}
                    {/* Commercial Construction Images Filter Button */}
                    {/* <Button 
                        outline 
                        color="secondary"
                        data-category="Commercial Construction"
                    >
                        Commercial Construction
                    </Button> */}
                    {/* General Contractor Images Filter Button */}
                    {/* <Button 
                        outline 
                        color="secondary"
                        data-category="General Contractor"
                    >
                        General Contractor
                    </Button> */} 
                    {/* <Button outline color="secondary">Remodeling Services</Button>{' '}
                    <Button outline color="secondary">Kitchen Remodeling</Button>{' '}
                    <Button outline color="secondary">Bathroom Remodeling</Button>{' '}
                    <Button outline color="secondary">Custom Cabinets</Button>{' '}
                    <Button outline color="secondary">Wood Working</Button>
                    <Button outline color="secondary">Room Addition</Button>
                    <Button outline color="secondary">Painting</Button>
                    <Button outline color="secondary">Residential Construction</Button>
                    <Button outline color="secondary">Commercial Construction</Button>
                    <Button outline color="secondary">General Contractor</Button> */}