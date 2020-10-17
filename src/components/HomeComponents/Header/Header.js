import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png';

const Header = () => {

    return (
        <Container>
            <Navbar bg="***" expand="lg" className="py-4">
                <Link to="/home">
                    <img src={logo} alt="" className="logo" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/home" className="header-link">Home</Link>
                        <Link to="#" className="header-link">Our Portfolio</Link>
                        <Link to="#" className="header-link">Our Team</Link>
                        <Link to="#" className="header-link">Contact Us</Link>
                        <Link to="/dashboard">
                            <Button variant="dark" className="header-button">Login</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;