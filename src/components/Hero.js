import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Modal } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';





let heroData = [
    {
        id: 1,
        image: require('../assests/images/img-hero1.jpg'),
        title: 'Trusted and Reliable Electrician in Ahmedabad',
        description: 'Expert and Reliable Electricians in Ahmedabad available for all Residential and Commercial Electrical Work.Serving Customers in Ahmedabad for over 1 Years',
        link: 'https://www.facebook.com'
    },
    {
        id: 2,
        image: require('../assests/images/img-hero2.jpg'),
        title: 'Trusted and Reliable Electrician in Ahmedabad',
        description: 'Expert and Reliable Electricians in Ahmedabad available for all Residential and Commercial Electrical Work.Serving Customers in Ahmedabad for over 1 Years',
        link: 'https://www.facebook.com'
    },
    {
        id: 3,
        image: require('../assests/images/img-hero3.jpg'),
        title: 'Trusted and Reliable Electrician in Ahmedabad',
        description: 'Expert and Reliable Electricians in Ahmedabad available for all Residential and Commercial Electrical Work.Serving Customers in Ahmedabad for over 1 Years',
        link: 'https://www.instagram.com'
    },

]

function Hero() {
    const whatsappUrl = `https://wa.me/${+917990528002}`;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section id='hero' className='hero-block'>
            <Carousel>
                {
                    heroData.map(hero => {
                        return (
                            <Carousel.Item key={hero.id}>
                                <img className='d-block w-100' src={hero.image} alt={"slide" + hero.id} />
                                <Carousel.Caption>
                                    <h3>{hero.title}</h3>
                                    <p>{hero.description}</p>
                                    <Button variant="primary" onClick={handleShow}>
                                        Take Appointment
                                    </Button>
                                    <Modal
                                        show={show}
                                        onHide={handleClose}
                                        dialogClassName="fullscreen-modal"
                                        aria-labelledby="example-custom-modal-styling-title"
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="example-custom-modal-styling-title">
                                                For Appointment
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form className='contact-form2' >
                                                <Row className="heroForm-content" >

                                                    <Form.Control type='name' placeholder=" Enter Your FullName" required />

                                                </Row>
                                                <Row className="heroForm-content" >

                                                    <Form.Control type='email' placeholder="Enter Your Email" required style={{ height: '38px' }} />

                                                </Row>
                                                <Row className="heroForm-content">

                                                    <Form.Control type='number' placeholder="Enter Mobile No." required />

                                                </Row>
                                                <Row className="heroForm-content">

                                                    <Form.Control name="message" as="textarea" placeholder="Leave a Message here" required />

                                                </Row>
                                                <div className='btn-holder' style={{ textAlign: "center" }}>
                                                    <Button type='submit'>Submit</Button>
                                                </div>
                                            </Form>
                                        </Modal.Body>
                                    </Modal>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }


            </Carousel>
        </section>
    )
}
export default Hero;

