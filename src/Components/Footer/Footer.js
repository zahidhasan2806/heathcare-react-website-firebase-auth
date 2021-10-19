import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../asset/logo-header.png'
import {
    faFacebook,

    faInstagram,

    faTwitter,

    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
    faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
    return (
        <div>
            {/* footer section  */}
            <div className="footer-container">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className='text-center'>
                                <img src={logo} width="100px" alt="" /> <br />
                                <Button variant="outline-info rounded-circle m-2" size="md"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Button>
                                <Button variant="outline-primary rounded-circle m-2" size="md"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></Button>
                                <Button variant="outline-danger rounded-circle m-2" size="md"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Button>
                                <Button variant="outline-danger rounded-circle m-2" size="md"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></Button>
                            </div>
                        </Col>
                        <Col md={4}>
                            <ul className="d-flex align-items-start justify-content-center flex-column">
                                <Link to='/home' className="footer-menu">Home</Link>
                                <Link to='/about' className="footer-menu"> About us</Link>
                                <Link as={HashLink} to='/home#service' className="footer-menu">Services</Link>
                                <Link to='/doctor' className="footer-menu">Doctors</Link>
                                <Link to='*' className="footer-menu">Terms & conditions</Link>
                            </ul>
                        </Col>
                        <div className="col-md-4">
                            <div>
                                <h3>Sign up for the newsletter</h3>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <Link to="/signup"><button className="btn btn-outline-dark">Register Now</button></Link>
                                </div>
                                <div className="phone d-flex align-items-center mt-4">
                                    <div className="footer-phone-icon">
                                        <FontAwesomeIcon icon={faMobileAlt} />
                                    </div>
                                    <div>
                                        <h5>Mobile: <small>+880 1646190607</small></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
                <div className="text-center">
                    <p className="mt-5">
                        <small>Zahid ZaM ©All rights reserved.</small>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Footer;