import React from 'react';
import { Button } from 'react-bootstrap';
import './HeaderMain.css'
import people from '../../../images/home-image/people.png'
import Header from '../../HomeComponents/Header/Header';

const HeaderMain = () => {
    return (
        <section className="header-main">
            <div className="container">
                <Header />
                <div className="row d-flex align-items-center header-main-content p-5">
                    <div className="col-md-6 col-12 col-sm-6">
                        <h1>Let’s Grow Your <br />Brand To The <br />Next Level</h1>
                        <p className="py-3">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
                        <Button variant="dark" className="header-button">Hire Us</Button>
                    </div>
                    <div className="col-md-6 col-12 col-sm-6">
                        <img src={people} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;