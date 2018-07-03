import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBlock,
CardTitle, CardText, Row, Col } from 'reactstrap';

const Footer = (props) => {
  return (
    <div>
        <Card>
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
                <Col md={3}>
                    <Button outline color='secondary' size='sm'>Home</Button>
                    <Button outline color='secondary' size='sm'>Interior</Button>
                    <Button outline color='secondary' size='sm'>Exterior</Button>
                    <Button outline color='secondary' size='sm'>About</Button>
                    <Button outline color='secondary' size='sm'>Photo Gallery</Button>
                    <Button outline color='secondary' size='sm'>Contact</Button>
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