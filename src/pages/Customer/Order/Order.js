import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import './Order.css'
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSuitcaseRolling, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();

    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert("Order Added successfully!");
                history.push("/customerServiceList");
                console.log(data);
                console.log('posted');
            })
    }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-12 py-3">
                        <Link to="/home" >
                            <img src={logo} alt="logo" className="logo" />
                        </Link>
                    </div>
                    <div className="col-md-9 col-sm-12 col-12 d-flex justify-content-between py-3">
                        <h4>Order</h4>
                        <div className="profile">
                            <h4>
                                <img style={{ height: '30px', width: '30px',marginRight:'10px' }} src={loggedInUser.photoURL} alt="photoURL" />
                                {loggedInUser.displayName}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-3">
                        <div className="sidebar d-flex flex-column">
                            <Link to="/customerOrder" className="py-1">
                                <h6 className="d-inline text-success"><FontAwesomeIcon icon={faShoppingCart} className="mr-2" />Order</h6>
                            </Link>
                            <Link to="/customerServiceList" className="py-1">
                                <h6 className="d-inline"><FontAwesomeIcon icon={faSuitcaseRolling} className="mr-2" /> Services</h6>
                            </Link>
                            <Link to="/customerReview" className="py-1">
                                <h6 className="d-inline"><FontAwesomeIcon icon={faCommentAlt} className="mr-2" /> Review</h6>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-9 col-9 container p-4" style={{ backgroundColor: '#E5E5E5' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input defaultValue={loggedInUser.displayName} name="name" type="text" placeholder="Name" className="form-control" ref={register({ required: true })} />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input defaultValue={loggedInUser.email} type="text" name="email" placeholder="Email" className="form-control" ref={register({ required: true })} />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input name="serviceName" placeholder="Enter service order name" className="form-control" ref={register({ required: true })} />
                                {errors.serviceName && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <textarea name="projectDetails" placeholder="Project Details" className="form-control" ref={register({ required: true })} rows="3"></textarea>
                                {errors.projectDetails && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input type="number" name="price" placeholder="Price" className="form-control" ref={register({ required: true })} />
                                    {errors.price && <span className="text-danger">This field is required</span>}
                                </div>
                                {/* <div className="form-group col-md-6">
                                    <input type="file" ref={register({ required: true })} />
                                </div> */}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-dark">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;