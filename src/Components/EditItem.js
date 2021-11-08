import React from 'react'
import { Navbar, Nav, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function EditItem() {
    return (
        <>
            <Navbar expand="lg" className="bg-cyan">
                <Container className="px-4 px-md-1 py-3 py-lg-0">
                    <Navbar.Brand className="logo fst-italic fw-bold" style={{ color: "#fff"}}>Eventful Momemts.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav className="me-end my-2 my-3 ">
                            <Link to="/login" className="text-decoration-none nav-link" style={{color: "#fff"}}>Logout</Link>
                            <Link to="/" className="text-decoration-none nav-link" style={{color: "#fff"}}>My Bucket</Link>
                    </Nav>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>  

            <Container className="m-auto ">
                  <Row>
                      <Col lg={6} md={9} sm={12} className="p-5 ">
                    
                        <Form className="mt-4">
                            <Form.Group className="mb-3 " controlId="formBasicText">
                                <Form.Label style={{ color: "#000"}}>Date in the future</Form.Label>
                                <Form.Control type="text" className="py-2" />
                            </Form.Group>
                            <Form.Group className="mb-3 " controlId="formBasicTitle">
                                <Form.Label style={{ color: "#000"}}>Title</Form.Label>
                                <Form.Control type="title" className="py-2" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Details</Form.Label>
                            <Form.Control as="textarea" rows={10} />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" className="button py-2" style={{ color: "#fff"}}>
                                Update
                            </Button>
                        </Form>
                      </Col>
                  </Row>
            </Container>  
        </>
    )
}

export default EditItem
