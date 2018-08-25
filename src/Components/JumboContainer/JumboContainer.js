import React, {Component} from 'react';
import { 
    Jumbotron, 
    Container,
    Row,
    Col } from 'reactstrap';
import Cards from '../Cards/Cards.js';
import './JumboContainer.css'

class JumboContainer extends Component {
    constructor() {
        super();
        this.state = {
            services: [
                {
                    type: 'Interior Services',
                    link: '/interior-services'
                },
                {
                    type: 'Exterior Services',
                    link: '/exterior-services'
                }
            ]
        }
    }
    render() {
        let servicesCards = this.state.services.map(services => {
            return (
                <Col xs={{size: 12}} sm={{size: 6}} md={{size: 6}} lg={{size: 3, offset: 2}} xl={{size: 3, offset: 2}}>
                    <Cards services={services} />
                </Col>
            )
        })
        return (
            <div>
            <Jumbotron fluid className="services-jumbotron">
                <Container fluid>
                <h1 className="display-4">Our Services</h1>
                    <Row>
                        {servicesCards}
                    </Row>
                </Container>
            </Jumbotron>
            </div>
        );
    };
};

export default JumboContainer;