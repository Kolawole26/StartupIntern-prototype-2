import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
    return (
        <div className="nav-bar">

            <Navbar expand="lg" className="bg-cyan">
                <Container>
                    <Navbar.Brand className="logo" style={{ color: "#fff"}}>Eventful Momemts.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav className="me-end my-2 my-3 ">
                            <Nav.Link href="#home" style={{ color: "#fff"}}>Login</Nav.Link>
                            <Nav.Link href="#features"style={{ color: "#fff"}}>Register</Nav.Link>
                    </Nav>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    )
}

export default NavigationBar
