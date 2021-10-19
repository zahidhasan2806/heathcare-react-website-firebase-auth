import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Item = (props) => {
    const { title, picture1, about, picture3, name } = (props.item)
    return (
        <div className="p-5">
            <Row>
                <Col md={6} sm={12}>
                    <h1>{title}</h1>
                    <h6>{about}</h6>
                    <Col md={6}>
                        <img src={picture3} alt="" />
                    </Col>
                    <Col md={6}>
                        <h2>{name}</h2>
                    </Col>
                </Col >
                <Col md={6} sm={12}>
                    <img className="img-fluid" src={picture1} alt="" />

                </Col>
            </ Row>
        </div >
    );
};

export default Item;