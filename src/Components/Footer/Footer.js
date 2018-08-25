import React from 'react';
import { 
    Card, 
    Button, 
    CardHeader, 
    CardFooter, 
    CardBlock,
    CardText, 
    Row, 
    Col } from 'reactstrap';

// Creating footer component
const Footer = (props) => {
  return (
    <div className="sticky-footer">
        <Card >
            <CardHeader tag="h3">EMS Construction</CardHeader>
            <CardBlock>
            <CardText>Call today for a FREE Consultation (222)-222-2222</CardText>
            <Row>
                <Col md={3}>
                    <CardText>service@emsconstruction.com</CardText>
                </Col>
                <Col md={6}>
                    <CardText>
                        Contractors License # 000000 <br />
                        350 5th Ave, New York, NY 10118
                    </CardText>
                </Col>
                {/* buttons to link in footer to other pages in application */}
                <Col md={3}>
                    <Button outline color='secondary' size='sm' tag='a' href='/'>Home</Button>
                    <Button outline color='secondary' size='sm' tag='a' href='/interior-services'>Interior</Button>
                    <Button outline color='secondary' size='sm' tag='a' href='/exterior-services'>Exterior</Button>
                    <Button outline color='secondary' size='sm' tag='a' href='/about'>About</Button>
                    <Button outline color='secondary' size='sm' tag='a' href='/contact'>Contact</Button>
                </Col>
            </Row>
            </CardBlock>
            <CardFooter className="text-muted">
                Copyright © 2017 EMS Construction. All Rights Reserved.
            </CardFooter>
        </Card>
    </div>
  );
};

export default Footer;