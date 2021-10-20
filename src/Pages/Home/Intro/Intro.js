import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import intro from "../../../asset/section 5.png"

const Intro = () => {
    return (
        <Container className="my-3">
            <Row>
                <Col md={6} sm={12}>
                    <img className="img-fluid" src={intro} alt="" />
                </Col>
                <Col md={6} sm={12}>
                    <p className="text-muted fs-1 text-start">Our Medical</p>
                    <h3 className="text-start">We're setting Standards in  <br /> Research what's more, Clinical Care. </h3>
                    <p className="text-start">We provide the most full medical services, so every person could have the oportunity o receive qualitative medical help.
                        <br />
                        Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. </p>
                    <Link to='/about'>
                        <Button variant="outline-dark">More About </Button>
                    </Link>

                </Col>
            </Row>
        </Container>
    );
};

export default Intro;