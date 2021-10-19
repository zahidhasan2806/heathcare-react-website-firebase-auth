import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = (props) => {
    const { picture1, _id, title, about } = props.service;
    return (

        <Col md={4} sm={6} className='my-3 items'>
            <Card className="service-card">
                <Card.Img variant="top" height="300px" src={picture1} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-primary bg-opacity-10 p-0">
                    <Link to={`/item/${_id}`}>
                        <Button className="w-100" variant="secondary">See Details</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;