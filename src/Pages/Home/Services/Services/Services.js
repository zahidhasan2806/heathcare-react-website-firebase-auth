import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = '/services.json';
        fetch(url)
            .then(res => res.json())
            .then(courses => setServices(courses))
    }, [])
    return (
        <div id="service">
            <h1>Our Services</h1>
            <Container>
                <Row>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;