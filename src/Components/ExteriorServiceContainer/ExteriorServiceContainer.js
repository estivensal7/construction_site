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
import ExteriorServiceCards from '../ExteriorServiceCards/ExteriorServiceCards.js';

class ExteriorServiceContainer extends Component {
    constructor() {
        super();
        this.state = {
            services: [
                {
                    type: 'Landscaping',
                    link: '/landscaping'
                },
                {
                    type: 'Patio Covers',
                    link: '/patio-covers'
                },
                {
                    type: 'Concrete & Hardscapes',
                    link: '/concrete-hardscapes'
                },
                {
                    type: 'Outdoor Living Spaces',
                    link: '/outdoor-living-spaces'
                }
            ]
        }
    }
    render() {
        let servicesCards = this.state.services.map(services => {
            return (
                <Col md={{size: 3}}>
                    <ExteriorServiceCards services={services} />
                </Col>
            )
        })
        return (
            <div>
            <Jumbotron fluid>
                <Container fluid>
                <h1 className="display-4">Exterior Services</h1>
                    <Row>
                        {servicesCards}
                    </Row>
                </Container>
            </Jumbotron>
            </div>
        );
    };
};

export default ExteriorServiceContainer;