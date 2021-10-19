import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStethoscope, faBrain, faMedkit } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services/Services';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4 col-sm-12 bg-warning bg-opacity-25 p-3 d-flex border-start border-primary border-5">
                        <div className="d-flex align-items-center ">
                            <FontAwesomeIcon className="fs-1 mx-3 " icon={faBrain} />
                        </div>
                        <div className="text-start">
                            <h5 className="mb-3">Specialized Therapy Support</h5>
                            <p>Our Clinic Largest Private Mental Health Partner, Carefully Selected Nationwide Team</p>
                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12 bg-info bg-opacity-50 p-3 d-flex">
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon className="fs-1 mx-3" icon={faMedkit} />
                        </div>
                        <div className="text-start">
                            <h5>Diagnosis and Investigation</h5>
                            <p>We provide the most full medical services, so every person could have the pportunity o receive qualitative medical help.</p>
                        </div>

                    </div>
                    <div className="col-md-4 bg-danger col-sm-12 bg-opacity-50 p-3 d-flex">
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon className="fs-1 mx-3" icon={faStethoscope} />
                        </div>
                        <div className="text-start">
                            <h5>Medical Treatment Surgical</h5>
                            <p>Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry.</p>
                        </div>

                    </div>
                </div>
            </div>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;