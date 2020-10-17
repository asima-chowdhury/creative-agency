import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcaseRolling, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, errors } = useForm();

    const [addServiceInfo, setAddServiceInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...addServiceInfo };
        newInfo[e.target.name] = e.target.value;
        setAddServiceInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', addServiceInfo.title)
        formData.append('description', addServiceInfo.description)

        fetch('https://sheltered-plateau-76755.herokuapp.com/addService', {
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
        alert('Service Successfully Added!');
    };

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
                        <h4>Add Services</h4>
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
                                <h6 className="d-inline text-success"><FontAwesomeIcon icon={faPlus} className="mr-2" />Add Service</h6>
                            </Link>
                            <Link to="/makeAdmin" className="py-1">
                                <h6 className="d-inline"><FontAwesomeIcon icon={faUserPlus} className="mr-2" />Make Admin</h6>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-10 col-10 container p-4" style={{ backgroundColor: '#E5E5E5' }}>
                        <form action="" onSubmit={handleSubmit} className="py-5 px-4" style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="title">Service Title</label>
                                    <input onBlur={handleBlur} name="title" type="text" placeholder="Enter title" className="form-control" required="true"/>
                                    {errors.title && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="icon">Icon</label>
                                    <input onChange={handleFileChange} name="icon" type="file" className="form-control" required="true"/>
                                    {errors.icon && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="description">Description</label>
                                    <textarea onBlur={handleBlur} name="description" placeholder="Enter Designation" className="form-control" required="true" rows="3"></textarea>
                                    {errors.description && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>
                            <div className="form-group d-flex justify-content-end">
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;