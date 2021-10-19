import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFound from "../../asset/404.jpg"
const NotFound = () => {
    return (
        <div className='container p-4'>
            <img width="50%" src={notFound} alt="" />
            <Link to='/'>
                <Button className="w-75" variant="outline-dark">Go Back</Button>
            </Link>
        </div>
    );
};

export default NotFound;