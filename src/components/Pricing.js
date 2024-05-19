import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

const pricingData = [
    {
        id: 1,
        name: 'Switchbox installation gaming ',
        price: '₹349',
        image: require('../assests/images/img8.jpg')

    },
    {
        id: 2,
        name: ' switchbox installation switch',
        price: '₹369',
        image: require('../assests/images/img5.jpg')

    },
    {
        id: 3,
        name: 'switchbox installation remote',
        price: '₹150',
        image: require('../assests/images/img7.jpg')

    },
    {
        id: 4,
        name: 'switchbox installation remote',
        price: '₹150',
        image: require('../assests/images/img7.jpg')

    },
    {
        id: 5,
        name: 'switchbox installation remote',
        price: '₹150',
        image: require('../assests/images/img7.jpg')

    },
    {
        id: 6,
        name: 'switchbox installation remote',
        price: '₹150',
        image: require('../assests/images/img7.jpg')

    },
    {
        id: 7,
        name: 'switchbox installation remote',
        price: '₹150',
        image: require('../assests/images/img7.jpg')

    },
    {
        id: 8,
        name: 'switchbox installation remote',
        price: '₹150',
        image: require('../assests/images/img7.jpg')

    },
    {
        id: 9,
        name: 'switchbox installation remote',
        price: '₹150',
        image: require('../assests/images/img7.jpg')

    }
]


function Pricing() {
    const whatsappUrl = `https://wa.me/${+919512375415}`;
    return (
        <section id="pricing" className="block pricing-block">
            <Container fluid className="con">
                <div className="title-holder">
                    <h2>Pricing &amp; plans</h2>
                    <div className="subtitle">Check our pricing & plans</div>

                </div>
                <Row className="heading">
                    {pricingData.map(pricing => (
                        <Col sm={4} className="heading3" key={pricing.id}>
                            <Row>
                                {/* First Sub-Block */}
                                <Col>
                                    <div className="division">
                                        <div className="img">
                                            <Image src={pricing.image} fluid height={"100%"} width={"100%"} />
                                        </div>
                                        {/* <div className="content">
                                            <h4>{pricing.name}</h4>
                                            <h3>{pricing.price}</h3>
                                            <a href="#" className="anchor">Know More</a>
                                        </div> */}
                                    </div>
                                </Col>

                                {/* Second Sub-Block */}
                                <Col>
                                    <div className="division">
                                        {/* <div className="img">
                                            <Image src={pricing.image} fluid height={"100%"} width={"100%"} />
                                        </div> */}
                                        <div className="content">
                                            <h4>{pricing.name}</h4>
                                            <h3>{pricing.price}</h3>
                                            <a href={whatsappUrl} className="anchor">Know More</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>


            </Container>
        </section >
    )
}
export default Pricing;
{/* <div className="btn-holder">
    <a href={pricing.link} className="btn btn-primary">Order Now</a>
</div> */}


{/* <Row className="check">
                    {
                        pricingData.map(pricing => {
                            return (
                                <Col sm={4} key={pricing.id} className="pricelist">
                                    <Col sm={6}>
                                        <div className="img">
                                            <Image src={pricing.image} fluid height={"100%"} width={"100%"} />
                                        </div>
                                        <div className="content">
                                            <h4>{pricing.name}</h4>
                                            <h3>{pricing.price}</h3>
                                            <a href="#" className="anchor">Know More</a>
                                        </div>

                                    </Col>



                                </Col>

                            )
                        })
                    }

                </Row> */}