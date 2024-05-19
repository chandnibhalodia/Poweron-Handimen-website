import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const serviceData = [
    {
        id: 1,
        image: require('../assests/images/img1.jpg'),
        title: 'ELECTRIC WIRING',
        description: 'Be it Residential or Commercial properties in Bangalore. Our Reliable Electricians ensure safe installations and reliable connections for Optimal Performance.'

    },
    {
        id: 2,
        image: require('../assests/images/img2.jpg'),
        title: 'APPLICANCE INSTALLATIONS',
        description: 'Efficient electric appliance installations. Our expert electricians in Bangalore ensure proper, safe connections to ensure reliable performance of your appliances.'

    },
    {
        id: 3,
        image: require('../assests/images/img3.jpg'),
        title: 'FIXING EARTHING ISSUES',
        description: 'Expert solutions for fixing earthing issues. Our electricians ensure safe grounding, eliminating electrical hazards and promoting system reliability.'

    },
    {
        id: 4,
        image: require('../assests/images/img4.jpg'),
        title: 'SWITCHBOARD INSTALLATION AND REPAIR',
        description: 'Expert switchboard installation and repair services in Bangalore. Our Skilled Electricians ensure safe and efficient electrical distribution through reliable switchboard solutions.'

    },
    {
        id: 5,
        image: require('../assests/images/img5.jpg'),
        title: 'GEYSER INSTALLATION AND REPAIR',
        description: 'Efficient geyser installation and repair services by Our expert electricians in Bangalore, ensures optimal performance and reliable service so that you never run out of Hot Water.'

    },
    {
        id: 6,
        image: require('../assests/images/img6.jpg'),
        title: 'POWER ISSUES',
        description: 'From flickering lights to circuit overloads, we tackle all Power Issues. Our expert electricians in Bangalore will provide swift and reliable solutions for residential and commercial properties.'

    },
]

function Services() {
    return (
        <section id='services' className='block services-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our Services</h2>
                    <div className='subtitle'>services we provide</div>
                </div>
                <Row>
                    {
                        serviceData.map(services => {
                            return (
                                <Col sm={4} className='holder' key={services.id}>
                                    <div className='icon'>
                                        <img src={services.image} alt={"slide" + services.id} />
                                    </div>
                                    <h3 style={{ marginTop: "20px", color: "lightblue", fontWeight: "bolder", textAlign: "center" }}>{services.title}</h3>
                                    <p>{services.description}</p>
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
        </section>
    )
}
export default Services;