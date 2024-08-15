import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Handshake from '../images/carhandshake.jpg';
const Contact = () => {
    return (
        <Container  fluid className="contact-us trending">
            <h2>Contact Us</h2>
            <Row className="align-items-center">
                <Col className="p-0">
                    <img
                        src={Handshake}
                        alt="Contact Us"
                        className="img-fluid contact-image"
                    />
                </Col>
                <Col className="contact-form">
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mt-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="formMessage" className="mt-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Your message" />
                        </Form.Group>

                        <Button variant="warning" type="submit" className="mt-4 w-100 btns">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
