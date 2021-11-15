import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navigation( {links} ) {
    return (
        <>
          <Navbar expand="lg" className="bg-cyan ">
                <Container className="px-4 px-md-1 py-3 py-lg-0">
                    <Navbar.Brand className="logo fst-italic fw-bold" style={{ color: "#fff"}}>Eventful Momemts.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav className="me-end my-2 my-3 ">
                           {links ? 
                            <>
                                <Link to="/login" className="text-decoration-none nav-link" style={{color: "#fff"}}>Login</Link>
                                <Link to="/register" className="text-decoration-none nav-link" style={{color: "#fff"}}>Register</Link>
                            </>
                            :
                            <>
                                 <Link to="/login" className="text-decoration-none nav-link" style={{color: "#fff"}}>Logout</Link>
                                <Link to="/" className="text-decoration-none nav-link" style={{color: "#fff"}}>My Bucket</Link>
                            </>   
                        }
                    </Nav>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>    
        </>
    )
}

export default Navigation
