import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSuitcaseRolling, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, errors } = useForm();

    const [addReviewInfo, setAddReviewInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...addReviewInfo };
        newInfo[e.target.name] = e.target.value;
        setAddReviewInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('name', loggedInUser.displayName);
        formData.append('companyName', addReviewInfo.companyName);
        formData.append('description', addReviewInfo.description);

        formData.image = loggedInUser.photoURL;

        fetch('https://sheltered-plateau-76755.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error)
            })
        alert("Added review successfully!");
    }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-12 py-3">
                        <Link to="/home" >
                            <img src={logo} alt="" className="logo" />
                        </Link>
                    </div>
                    <div className="col-md-9 col-sm-12 col-12 d-flex justify-content-between py-3">
                        <h4>Review</h4>
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
                                <h6 className="d-inline"><FontAwesomeIcon icon={faSuitcaseRolling} className="mr-2" /> Services</h6>
                            </Link>
                            <Link to="/customerReview" className="py-1">
                                <h6 className="d-inline text-success"><FontAwesomeIcon icon={faCommentAlt} className="mr-2" /> Review</h6>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-9 col-9 container p-4" style={{ backgroundColor: '#E5E5E5' }}>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input name="name" type="text" value={loggedInUser.displayName} placeholder="Name" className="form-control" required="true" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} name="companyName" placeholder="Company’s name, Designation" className="form-control" required="true" />
                                {errors.companyName && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <textarea onBlur={handleBlur} name="description" placeholder="Description" className="form-control" required="true" rows="3"></textarea>
                                {errors.description && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;