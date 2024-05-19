import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from '../assests/images/img1.jpg';


function About() {

    return (
        <section id='about' className='block about-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>About Us</h2>
                    <div className='subtitle'>learn more about us</div>
                </div>
                <Row>
                    <Col sm={6}>
                        <Image src={img1} />
                    </Col>
                    <Col sm={6}>
                        <p>At Poweron Electricians, we understand the importance of a well-functioning electrical system in both commercial and residential settings. Our team of highly skilled electricians is equipped to handle a wide range of electrical services, including installations, repairs, maintenance, and upgrades. Whether you need assistance with wiring, lighting, power distribution, switchboard installations, or any other electrical requirements, we have got you covered. </p>
                        <div className='progress-block' style={{ fontSize: "14px" }}>
                            <p><i className="fa-solid fa-circle-check" style={{ color: "blue", marginRight: "5px" }}></i>Expert installation of wiring, outlets, switches, lighting fixtures, and electrical panels</p>
                            <p><i className="fa-solid fa-circle-check" style={{ color: "blue", marginRight: "5px" }}></i>Swift and reliable repairs for power outages, faulty wiring, circuit breakers, and other electrical issues
                            </p>
                            <p><i className="fa-solid fa-circle-check" style={{ color: "blue", marginRight: "5px" }}></i>Maintenance and Inspections:</p>
                            <p><i className="fa-solid fa-circle-check" style={{ color: "blue", marginRight: "5px" }}></i>pgrading electrical systems, wiring, and lighting to meet modern energy-efficient standards and enhance functionality</p>
                            <p><i className="fa-solid fa-circle-check" style={{ color: "blue", marginRight: "5px" }}></i>24/7 availability for prompt response and resolution of urgent electrical problems</p>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default About;