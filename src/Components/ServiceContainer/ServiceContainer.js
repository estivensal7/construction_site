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
import ServiceCards from '../ServiceCards/ServiceCards.js';

class ServiceContainer extends Component {
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
                }
            ],
            services2: [
                {
                    type: 'Bathroom Remodeling',
                    link: '/bathroom-remodeling'
                },
                {
                    type: 'Custom Cabinets',
                    link: '/custom-cabinets'
                }
            ],
            services3: [
                {
                    type: 'Wood Working',
                    link: '/wood-working'
                },
                {
                    type: 'Painting',
                    link: '/painting'
                }
            ],
            services4: [
                {
                    type: 'Room Additions',
                    link: '/room-additions'
                },
                {
                    type: 'Residential Construction',
                    link: '/residential-construction'
                }
            ],
            services5: [
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
                <Col md={{size: 3, offset: 2}}>
                    <ServiceCards services={services} />
                </Col>
            )
        })
        return (
            <div>
            <Jumbotron fluid>
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

export default ServiceContainer;