import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcaseRolling, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
        fetch('https://sheltered-plateau-76755.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert("Admin Added successfully!");
                console.log(data);
            })
    }

    return (
        <section className="add-service">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-12 col-12 py-3">
                        <Link to="/home" >
                            <img src={logo} alt="" className="logo" />
                        </Link>
                    </div>
                    <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-between py-3">
                        <h4>Make Admin</h4>
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
                                <h6 className="d-inline"><FontAwesomeIcon icon={faSuitcaseRolling} className="mr-2" /> Service List</h6>
                            </Link>
                            <Link to="/addService" className="py-1">
                                <h6 className="d-inline"><FontAwesomeIcon icon={faPlus} className="mr-2" />Add Service</h6>
                            </Link>
                            <Link to="/makeAdmin" className="py-1">
                                <h6 className="d-inline text-success"><FontAwesomeIcon icon={faUserPlus} className="mr-2" />Make Admin</h6>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-10 col-10 container p-4" style={{ backgroundColor: '#E5E5E5' }}>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-row py-5 px-4" style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="john@gmail.com" className="form-control" ref={register({ required: true })} />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group col-md-6" style={{ paddingTop: '31px' }}>
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;