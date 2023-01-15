import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../resources/logo.svg'
import './navbar.css'



function TopNav() {
    return (
        <>
            <Navbar className="navtop navbar navbar-expand-lg navbar-light" variant="light">
                <Container className="container-fluid">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Container>
                        <Navbar.Brand href="#home"><img
                            src={logo}
                            width="20%"
                            height="20%"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /></Navbar.Brand>
                        
                    </Container>
                    <Navbar.Collapse><Nav className="me-auto">
                        <Nav.Link href="#about" className="me-auto fs-5">About</Nav.Link>
                        <Nav.Link href="#timeline" className="me-auto fs-5">Schedule</Nav.Link>
                        <Nav.Link href="#domains" className="me-auto fs-5">Domains</Nav.Link>
                        <Nav.Link href="#sponsors" className="me-auto fs-5">Sponsors</Nav.Link>
                        <Nav.Link href="#faq" className="me-auto fs-5">FAQs</Nav.Link>
                    </Nav></Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    )
}

export default TopNav;