import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText, faMapMarkedAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="border container mb-2">
            <section className="py-lg-5 h-100 container">
                <div className="contact">
                    <div className="container text-color">
                        <div className="mb-5 text-center">
                            <h5> Let's Start a conversation!</h5>
                            <h1 className="fw-bold">Contact Us</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 text-center">
                            <h4 className="fw-bold">Contact Info</h4>
                            <ul className="info list-unstyled">
                                <li className="d-flex align-items-center justify-content-center">
                                    <span className="pe-3"><FontAwesomeIcon icon={faMapMarkedAlt} /></span>
                                    <p>4967 Sardis Sta, <br />
                                        Victoria 8007, Montreal., </p>
                                </li>
                                <li className="d-flex align-items-center justify-content-center">
                                    <span className="pe-1"><FontAwesomeIcon icon={faMobileAlt} /></span>
                                    <p>+1 246-345-0695</p>
                                </li>
                                <li className="d-flex align-items-center justify-content-center">
                                    <span className="pe-3 mt-0"><FontAwesomeIcon icon={faEnvelopeOpenText} /></span>
                                    <p >info@learup.in</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-7 pt-lg-o pt-4">
                            <form action="">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email adress" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <button as={NavLink} to="/login" className="btn btn-bg-color fw-bold"><span className="pe-1"><FontAwesomeIcon icon={faRocketchat} /></span>Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;