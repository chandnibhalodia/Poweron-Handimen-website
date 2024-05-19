import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function Contact() {



    function handleButtonClick() {
        window.open('tel:+9512375415', '_blank');
    }
    return (
        <section id='contact' className='block contact-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Contact Us</h2>
                    <div className='subtitle'>get Connected with us</div>
                </div>
                <Form className='contact-form' action="https://formspree.io/f/mkndqdza" method="POST">
                    <Row>
                        <Col sm={4}>
                            <Form.Control name="name" type='text' placeholder="Enter your name" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control name="_replyto" type='email' placeholder="Enter your Email" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control name="number" type='tel' placeholder="Enter your Number" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control name="message" as="textarea" placeholder="Leave a Message here" required />
                        </Col>
                    </Row>
                    <div className='btn-holder'>
                        <Button type='submit'>Submit</Button>
                    </div>
                </Form>

            </Container>
            <div className='google-map'>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14682.9849816947!2d72.6482068!3d23.0697629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86cd22612d2b%3A0x9fb32d6f0c2a08c1!2sPavan%20Apartment!5e0!3m2!1sen!2sin!4v1712142151774!5m2!1sen!2sin" loading="lazy" ></iframe>
            </div>
            <Container fluid>
                <div className='contact-info'>
                    <ul>
                        <li>
                            <i className="fas fa-envelope"></i>
                            poweron.electricalservice@gmail.com
                        </li>
                        <li>
                            <a onClick={handleButtonClick}>
                                <i className="fas fa-phone"></i>
                                7990528002
                            </a>
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            Ahmedabad,India
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}
export default Contact;
