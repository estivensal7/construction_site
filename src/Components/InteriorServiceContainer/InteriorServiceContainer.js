import React, {Component} from 'react';
import { 
    Jumbotron, 
    Container,
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button,
    Row,
    Col } from 'reactstrap';
import InteriorServiceCards from '../InteriorServiceCards/InteriorServiceCards.js';
import './InteriorServiceContainer.css';

class InteriorServiceContainer extends Component {
    constructor() {
        super();
        this.state = {
            services: [
                {
                    type: 'Design & Build',
                    link: '/design-build-remodeling'
                },
                {
                    type: 'Kitchen Remodeling',
                    link: '/kitchen-remodeling'
                },
                {
                    type: 'Bathroom Remodeling',
                    link: '/bathroom-remodeling'
                },
                {
                    type: 'Custom Cabinets',
                    link: '/custom-cabinets'
                },
                {
                    type: 'Wood Working',
                    link: '/wood-working'
                },
                {
                    type: 'Painting',
                    link: '/painting'
                },
                {
                    type: 'Room Additions',
                    link: '/room-additions'
                },
                {
                    type: 'Residential Construction',
                    link: '/residential-construction'
                },
                {
                    type: 'Commercial Construction',
                    link: '/commercial-construction'
                },
                {
                    type: 'General Contractor',
                    link: '/general-contractor'
                }
            ]
        }
    }
    render() {
        let servicesCards = this.state.services.map(services => {
            return (
                <Col sm={{size: 6}} md={{size: 3}}>
                    <InteriorServiceCards services={services} />
                </Col>
            )
        })
        return (
            <div className="interior-container">
            <Jumbotron fluid className="interior-services-jumbotron">
                <Container fluid>
                <h1 className="display-4">Interior Services</h1>
                    <Row>
                        {servicesCards}
                    </Row>
                </Container>
            </Jumbotron>
            </div>
        );
    };
};

export default InteriorServiceContainer;