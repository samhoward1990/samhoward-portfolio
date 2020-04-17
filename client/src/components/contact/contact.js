import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './contact.css';

class Contact extends React.Component {
    handleFormSubmit(event) {
        event.preventDefault();
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let company = document.getElementById("company").value;
        let email = document.getElementById("email").value;
        let phoneNumber = document.getElementById("phoneNumber").value;
        let message = document.getElementById("message").value;

        axios.post('/send', {
            firstName: firstName,
            lastName: lastName,
            company: company,
            email: email,
            phoneNumber: phoneNumber,
            message: message
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return (
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
                                <Form.Group controlId="firstName">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control placeholder="John" />
                                </Form.Group>
                            </Col>
                            <Col xs="4">
                                <Form.Group controlId="lastName">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control placeholder="Doe" />
                                </Form.Group>
                            </Col>
                            <Col xs="4">
                                <Form.Group controlId="company">
                                    <Form.Label>Company</Form.Label>
                                    <Form.Control placeholder="John Doe Inc." />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6">
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="johndoe@email.com" />
                                </Form.Group>
                            </Col>
                            <Col xs="6">
                                <Form.Group controlId="phoneNumber">
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control placeholder="800-000-0000"></Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                                <Form.Group controlId="message">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows="4" placeholder="Optional" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button className="styled-button" variant="info" type="submit" onClick={this.handleFormSubmit}>Submit</Button>
                    </Form>
                </div>
            </Container>
        );
    };
};

export default Contact;