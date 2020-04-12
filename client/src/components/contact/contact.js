import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './contact.css';

const Contact = () => (
    <Container className="mt-3">
        <div className="bg-white">
            <Row>
                <Col xs="12">
                    <h2 className="styled-header border-bottom ml-5 mr-5 p-3">Contact</h2>
                </Col>
            </Row>
            <Form className="ml-5 mr-5 p-3">
                <Row>
                    <Col xs="4">
                        <Form.Group controlId="formGroupFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control placeholder="John" />
                        </Form.Group>
                    </Col>
                    <Col xs="4">
                        <Form.Group controlId="formGroupLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control placeholder="Doe" />
                        </Form.Group>
                    </Col>
                    <Col xs="4">
                        <Form.Group controlId="formGroupCompany">
                            <Form.Label>Company</Form.Label>
                            <Form.Control placeholder="John Doe Inc." />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6">
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="johndoe@email.com" />
                        </Form.Group>
                    </Col>
                    <Col xs="6">
                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control placeholder="800-000-0000"></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Form.Group controlId="formGroupMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="4" placeholder="Optional" />
                        </Form.Group>
                    </Col>
                </Row>
                <Button className="styled-button" variant="info" type="submit">Submit</Button>
            </Form>
        </div>
    </Container>
);

export default Contact;