import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Item from '../../Item/Item';

const ServiceDetail = () => {
    const { itemId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))

    }, [])

    const singleService = serviceDetails.filter(serviceDetail => serviceDetail._id === itemId);

    return (
        <div>
            {
                singleService.map((item) => <Item key={item._id} item={item}></Item>)
            }
        </div >
    );
};

export default ServiceDetail;