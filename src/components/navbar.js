import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../resources/logo.svg'
import './navbar.css'



function TopNav() {
    return (
        <>
            <Navbar className="navbar navbar-expand-lg navbar-light" variant="light">
                <Container>
                    <Container>
                        <Navbar.Brand href="#home"><img
              src={logo}
              width="20%"
              height="20%"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
                    </Container>
                    <Nav className="ms-auto">
                        <Nav.Link href="#about" className="me-3 fs-5">About</Nav.Link>
                        <Nav.Link href="#timeline" className="me-3 fs-5">Schedule</Nav.Link>
                        <Nav.Link href="#domains" className="me-3 fs-5">Domains</Nav.Link>
                        <Nav.Link href="#sponsors" className="me-3 fs-5">Sponsors</Nav.Link>
                        <Nav.Link href="#faq" className="me-3 fs-5">FAQs</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default TopNav;