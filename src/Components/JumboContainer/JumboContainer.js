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
import Cards from '../Cards/Cards.js';

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
                <Col md={{size: 3, offset: 2}}>
                    <Cards services={services} />
                </Col>
            )
        })
        return (
            <div>
            <Jumbotron fluid>
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