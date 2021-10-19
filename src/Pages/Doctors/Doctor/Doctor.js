
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Doctor = (props) => {
    const { designation, name, img, specialist } = (props.doctor);
    return (
        <Col md={4} sm={6} className='my-3 items'>
            <Card>
                <Card.Img height="250px" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h5>{designation}</h5>
                    </Card.Text>
                    <Card.Text>
                        <h6>{specialist}</h6>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-primary bg-opacity-10 p-0">

                    <Link to="/appoinment">
                        <Button className="w-100" variant="secondary">Make an Appoinment</Button>
                    </Link>

                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Doctor;