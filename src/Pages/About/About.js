
import { faHospital, faMale, faNotesMedical, faUserInjured } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import aboutus from "../../asset/aboutUs.jpg"
import "./About.css"

const About = () => {
    return (
        <div className="">
            <div className="text-start about-intro py-5">
                <h1 className="py-5 ms-3"> About Us</h1>
                <div className="text-start d-flex ">
                    <NavLink to="/home" className="fs-5 ms-3">Home</NavLink>   <span>/</span>
                    <NavLink to="/about" className="fs-5">About</NavLink>
                </div>
            </div>
            <div>
                <Row className="my-5 mx-0 ">
                    <Col md={4} sm={12}>
                        <img src={aboutus} width="100%" className="img-fluid rounded" alt="" />
                    </Col>
                    <Col md={8} sm={12} className="text-md-start text-sm-center d-flex align-items-center justify-content-center">
                        <div className="w-50">
                            <h5>About us</h5>
                            <h1>Welcome to Medi Help</h1>
                            <p>MediHelp exists to provide a better patient experience. We are a one-stop-shop for your health, offering caring doctors, world-class diagnostics and much more.</p>
                        </div>
                    </Col>
                </Row>

                <Container className="mt-5">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 w-25 mx-auto ">
                        <Tab eventKey="home" title="Our Mission">
                            <p>
                                We believe that everyone should have access to convenient, affordable, and high-quality care.
                                We are on a mission to change how healthcare is delivered in Bangladesh.We know how daunting getting access to the right care can be which is why we focus on turning a doctor visit into a delightful experience.
                                Our goal is to make the process intuitive for our patients and provide care where ever you are – in clinic or at-home.
                            </p>
                        </Tab>
                        <Tab eventKey="profile" title="Our Vission">
                            We have imaging and laboratory services. To ensure the quality of tests, our lab participates in the world’s largest external quality assessment scheme. Our average accuracy score is 99.9% and rated one of the best in Bangladesh.We provide best-in-class care at a price you can afford. We work hard to reduce our cost, so more Bangladeshis can have access to great care.
                        </Tab>
                    </Tabs>
                </Container>
                <div className="about-info text-white ">
                    <div className="bg-success bg-opacity-75 mt-5 py-5">
                        <h1 className="my-3">MediHelp in numbers</h1>
                        <p className="my-3">Learn more about Bangladesh’s fastest growing healthcare business </p>
                        <Row className=" m-0" >
                            <Col md={3} className="p-0">
                                <p className="fs-1"><FontAwesomeIcon icon={faMale}></FontAwesomeIcon></p>
                                <p>50+</p>
                                <p>DOCTORS</p>
                            </Col>
                            <Col md={3} sm={12} className="p-0">
                                <p className="fs-1"><FontAwesomeIcon icon={faNotesMedical}></FontAwesomeIcon></p>
                                <p>250+</p>
                                <p>LAB TESTS</p>
                            </Col>
                            <Col md={3} className="p-0">
                                <p className="fs-1"><FontAwesomeIcon icon={faUserInjured}></FontAwesomeIcon></p>
                                <p>5,000 + </p>
                                <p>WE HAVE 100+ CORPORATE <br /> CUSTOMERS WITH 5k+ PATIENTS</p>
                            </Col>
                            <Col md={3} className="p-0">
                                <p className="fs-1"><FontAwesomeIcon icon={faHospital}></FontAwesomeIcon></p>
                                <p>1 of the first</p>
                                <p>GOVERNMENT-APPROVED <br /> PRIVATE LABS TO OFFER COVID-19 TESTING</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;