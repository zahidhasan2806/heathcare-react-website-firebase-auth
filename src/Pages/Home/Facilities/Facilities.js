import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import facilities from "../../../asset/facilities0.jpg"
const Facilities = () => {
    return (
        <Container className="mb-4">
            <Row >
                <Col md={6} sm={12}>
                    <div>
                        <h3>Our Facilities</h3>
                        <hr />
                    </div>
                    <Row className="text-muted">
                        <Col md={6}>
                            <p>&#10003; Home Services </p>
                            <p>&#10003; 24/7 Services</p>
                            <p>&#10003; General Medical</p>
                            <p>&#10003; Women Health</p>
                        </Col>
                        <Col md={6}>
                            <p>&#10003; ICU</p>
                            <p>&#10003; NICU</p>
                            <p>&#10003; Surgery</p>
                            <p>&#10003; Ambulance</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} sm={12} >
                    <img className="rounded img-fluid" src={facilities} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Facilities;