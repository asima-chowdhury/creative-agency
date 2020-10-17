import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import './AdminServiceList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcaseRolling, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import loading from '../../../images/loading.gif'

const AdminServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [totalServiceList, setTotalServiceList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/customerServiceList`)
            .then(res => res.json())
            .then(data => {
                setTotalServiceList(data);
            })
    }, [])
    return (
        <section className="service-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-12 col-12 py-3">
                        <Link to="/home" >
                            <img src={logo} alt="" className="logo" />
                        </Link>
                    </div>
                    <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-between py-3">
                        <h4>Services List</h4>
                        <div className="profile">
                            <h4>
                                <img style={{ height: '30px', width: '30px', marginRight: '10px' }} src={loggedInUser.photoURL} alt="photoURL" />
                                {loggedInUser.displayName}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-2">
                        <div className="sidebar d-flex flex-column">
                            <Link to="/adminServiceList" className="py-1">
                                <h6 className="d-inline text-success"><FontAwesomeIcon icon={faSuitcaseRolling} className="mr-2" /> Service List</h6>
                            </Link>
                            <Link to="/addService" className="py-1">
                                <h6 className="d-inline"><FontAwesomeIcon icon={faPlus} className="mr-2" />Add Service</h6>
                            </Link>
                            <Link to="/makeAdmin" className="py-1">
                                <h6 className="d-inline"><FontAwesomeIcon icon={faUserPlus} className="mr-2" />Make Admin</h6>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-10 col-10 container p-4" style={{ backgroundColor: '#E5E5E5' }}>
                        <div className="row py-2" style={{ backgroundColor: '#BCFFB1' }}>
                            <div className="col-md-2">
                                <h6>Name</h6>
                            </div>
                            <div className="col-md-3">
                                <h6>Email ID</h6>
                            </div>
                            <div className="col-md-2">
                                <h6>Service</h6>
                            </div>
                            <div className="col-md-3">
                                <h6>Project Details</h6>
                            </div>
                            <div className="col-md-2">
                                <h6>Status</h6>
                            </div>
                        </div>
                        {
                            totalServiceList.length === 0 && <img src={loading} alt="loading" className="mx-auto" />
                        }
                        {
                            totalServiceList.map(service =>
                                <div className="service-list-items" key={service._id}>
                                    <div className="row bg-white pt-1 border-bottom">
                                        <div className="col-md-2">
                                            <p>{service.name}</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p>{service.email}</p>
                                        </div>
                                        <div className="col-md-2">
                                            <p>{service.serviceName}</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p>{service.projectDetails}</p>
                                        </div>
                                        <div className="col-md-2">
                                            <div>
                                                <select id="status" name="status" style={{ border: '0' }}>
                                                    <option value="pending" className="text-danger">Pending</option>
                                                    <option value="done" className="text-success">Done</option>
                                                    <option value="ongoing" className="text-warning">On going</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminServiceList;