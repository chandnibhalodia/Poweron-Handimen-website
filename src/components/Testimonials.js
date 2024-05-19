import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

let testimonialData = [
    {
        id: 1,
        name: 'Arvind Vijay',
        description: 'Amazing service. Electrician came immediately and solved the issue. I will recommend Ratan he is the best guy for the job all over Ahmedabad',
        designation: 'Manager',
        star: "★★★★★"

    },
    {
        id: 2,
        name: 'Rajesh Unnam',
        description: 'Great Experience, Good power issues troubleshooter. Ontime response. I can suggest strongly him. ',
        designation: 'CEO',
        star: "★★★★"

    },
    {
        id: 3,
        name: 'Anand Janu',
        description: 'Very good experience really appreciate with us work heartily thanks Poweron electricians good ',
        designation: 'Accountant',
        star: "★★★★★"

    },
]

function Testimonials() {
    return (
        <section id='testimonials' className='testimonials-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Client Testimonials</h2>
                    <div className='subtitle'>Clients and Customers testify to exceptional workmanship and service quality of our Electricians in Ahmedabad.</div>
                </div>
                <Carousel >
                    {
                        testimonialData.map(testimonials => {
                            return (
                                <Carousel.Item key={testimonials.id}>
                                    <blockquote>
                                        <p style={{ fontSize: "23px" }}>{testimonials.description}</p>
                                        <p style={{ fontSize: "25px" }}>{testimonials.star}</p>
                                        <cite>
                                            <span className='name'>{testimonials.name}</span>
                                            <span className='designation'>{testimonials.designation}</span>
                                        </cite>
                                    </blockquote>
                                </Carousel.Item>
                            )
                        })
                    }


                </Carousel>


            </Container>
        </section>
    )
}
export default Testimonials;