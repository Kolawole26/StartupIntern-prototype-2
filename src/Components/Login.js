import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';

function Login( {firstLinks} ) {

    useEffect(() => {
        firstLinks()

     });

    return (
        <>
           

            <Container className="m-auto ">
                  <Row>
                      <Col lg={6} md={9} sm={12} className="p-5 m-auto ">
                        <h1 className="mt-5 pt-5 pb-3 fw-bold" style={{ color: "#000"}}>Welcome back,</h1>
                        <p className="h5"style={{ color: "#000", }}>Hi, my name is Eventful Moments, I am a bucket... no, not the 
                        bucket of water but i store awesome moments you will like to have in coming years.
                        </p>

                        <Form >
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Label style={{ color: "#000"}}>Email</Form.Label>
                                <Form.Control type="email" className="py-2" />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label style={{ color: "#000"}}>Password</Form.Label>
                                <Form.Control type="password" className="py-2" />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" className="button py-2" style={{ color: "#fff"}}>
                                Login
                            </Button>
                        </Form>
                      </Col>
                  </Row>
            </Container>
        </>
    )
}

export default Login
