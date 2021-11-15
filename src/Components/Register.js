import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';

function Register( {firstLinks} ) {

    useEffect(() => {
        firstLinks()

     });

    return (
        <>
         

            <Container className="m-auto ">
                  <Row>
                      <Col lg={6} md={9} sm={12} className="p-5 m-auto ">
                        <h1 className="mt-5 pt-5 pb-3 fw-bold" style={{ color: "#000"}}>Create an account</h1>

                        <Form >
                            <Form.Group className="mb-3 " controlId="formBasicName">
                                <Form.Label style={{ color: "#000"}}>Fullname</Form.Label>
                                <Form.Control type="name" className="py-2" />
                            </Form.Group>
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Label style={{ color: "#000"}}>Email</Form.Label>
                                <Form.Control type="email" className="py-2" />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label style={{ color: "#000"}}>Password</Form.Label>
                                <Form.Control type="password" className="py-2" />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" className="button py-2" style={{ color: "#fff"}}>
                                Create
                            </Button>
                        </Form>
                      </Col>
                  </Row>
            </Container> 
        </>
    )
}

export default Register
