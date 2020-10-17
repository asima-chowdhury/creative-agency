import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './ServiceList.css'
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSuitcaseRolling, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import serviceImg from '../../../images/icons/service1.png';


const ServiceList = () => {
    const [serviceListData, setServiceListData] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://sheltered-plateau-76755.herokuapp.com/order?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setServiceListData(data);
            })
    }, [])
    return (
        <section className="service-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-12 py-3">
                        <Link to="/home" >
                            <img src={logo} alt="" className="logo" />
                        </Link>
                    </div>
                    <div className="col-md-9 col-sm-12 col-12 d-flex justify-content-between py-3">
                        <h4>Service List</h4>
                        <div className="profile">
                            <h4>
                                <img style={{ height: '30px', width: '30px', marginRight: '10px' }} src={loggedInUser.photoURL} alt="photoURL" />
                                {loggedInUser.displayName}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-3">
                        <div className="sidebar d-flex flex-column">
                            <Link to="/customerOrder" className="py-1">
                                <h6 className="d-inline"><FontAwesomeIcon icon={faShoppingCart} className="mr-2" />Order</h6>
                            </Link>
                            <Link to="/customerServiceList" className="py-1">
                                <h6 className="d-inline text-success"><FontAwesomeIcon icon={faSuitcaseRolling} className="mr-2" /> Services</h6>
                            </Link>
                            <Link to="/customerReview" className="py-1">
                                <h6 className="d-inline"><FontAwesomeIcon icon={faCommentAlt} className="mr-2" /> Review</h6>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-9 col-9 container p-4" style={{ backgroundColor: '#E5E5E5' }}>
                        <div className="row d-flex justify-content-between service-card">
                            {
                                serviceListData.map(service =>
                                    <div className="card col-md-5 my-2" key={service._id}>
                                        <div className="card-header d-flex justify-content-between">
                                            <img className="img-fluid" src={serviceImg} alt="serviceImage" width="60" />
                                            <h6 className="pt-3 px-3 rounded" style={{ backgroundColor: '#FFE3E3', color: '#FF4545' }}>Pending</h6>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="card-text font-weight-bold">{service.serviceName}</h6>
                                            <p className="card-text text-secondary">{service.projectDetails}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceList;