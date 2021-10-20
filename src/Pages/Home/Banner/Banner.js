import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slider01 from "../../../asset/carousel/slider-01.png"
import slider02 from "../../../asset/carousel/slider-05.png"
import slider03 from "../../../asset/carousel/slider-04.png"

const Banner = () => {
    return (
        <Carousel variant="dark text-white">
            <Carousel.Item>
                <img
                    className="d-block w-100" height="600px"
                    src={slider03}
                    alt="First slide"
                />
                <Carousel.Caption className='mb-5 '>
                    <h1>Welcome to Our Medi Help Center</h1>
                    <p>Nothing is more important than wellness.</p>
                    <Link to="/appoinment">
                        <Button variant="outline-primary  px-5 mb-5">Make Apponitment</Button>
                    </Link>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" height="600px"
                    src={slider02}
                    alt="Second slide"
                />
                <Carousel.Caption className='mb-5'>
                    <h1>Welcome to Our Medi Help Center</h1>
                    <p>Uncompromising excellence. Commitment to care</p>
                    <Link to="/appoinment">
                        <Button variant="outline-primary  px-5 mb-5">Make Apponitment</Button>
                    </Link>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" height="600px"
                    src={slider01}
                    alt="Third slide"
                />
                <Carousel.Caption className='mb-5'>
                    <h1>Welcome to Our Medi Help Center</h1>
                    <p>Where there is a healing, there is a hope</p>
                    <Link to="/appoinment">
                        <Button variant="outline-primary  px-5 mb-5">Make Apponitment</Button>
                    </Link>


                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;