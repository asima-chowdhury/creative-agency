import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 py-md-5 my-md-3 text-center rounded serviceDetail">
            <Link to="/customerOrder">
                {
                    service.image ?
                        <img style={{ height: '80px' }} src={`data:image/png;base64,${service.image.img}`} alt="service" />
                        :
                        <img style={{ height: '80px' }} src={`http://localhost:5000/${service.img}`} alt="service" />
                }
                <h5 className="my-3">{service.title}</h5>
                <p className="text-secondary">{service.description}</p>
            </Link>
        </div>
    );
};

export default ServiceDetail;