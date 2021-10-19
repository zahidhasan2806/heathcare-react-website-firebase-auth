import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        const url = '/doctors.json';
        fetch(url)
            .then(res => res.json())
            .then(courses => setDoctors(courses))
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    {
                        doctors.map(doctor => <Doctor key={doctor.name} doctor={doctor}></Doctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;