import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'



function TopNav() {
    return (
        <>
            <Navbar className="navbar navbar-expand-lg navbar-dark" variant="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/home" className="ms-3 me-3 fs-5">Home</Nav.Link>
                        <Nav.Link href="/portfolio"className="me-3 fs-5">Portfolio</Nav.Link>
                        <Nav.Link href="/blogs"className="me-3 fs-5">Blogs</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default TopNav;