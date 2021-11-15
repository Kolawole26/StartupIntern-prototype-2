import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';

function AddItem( {secondLinks} ) {
    useEffect(() => {
        secondLinks()

     });

    return (
        <>
        

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
                                Save
                            </Button>
                        </Form>
                      </Col>
                  </Row>
            </Container> 
        </>
    )
}

export default AddItem
