import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

const blogData = [
    {
        id: 1,
        image: require('../assests/images/blog1.jpg'),
        title: 'Coffee Lovers',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don"t look even slightly believable.',
        link: 'https://www.google.com',
        time: ''
    },
    {
        id: 2,
        image: require('../assests/images/blog2.jpg'),
        title: 'IT Lovers',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don"t look even slightly believable.',
        link: 'https://www.facebook.com',
        time: ''
    },
    {
        id: 3,
        image: require('../assests/images/blog3.jpg'),
        title: 'Education Lovers',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don"t look even slightly believable.',
        link: 'https://www.instagram.com',
        time: ''
    },
]



function Blog() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedDate = currentTime.toLocaleDateString();
    return (
        <section id='blog' className='block blog-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Latest from blog</h2>
                    <div className='subtitle'>
                        get our latest news from blog
                    </div>

                </div>
                <Carousel>
                    {
                        blogData.map(blog => {
                            return (
                                <Carousel.Item key={blog.id} className='blog-item'>
                                    <img className='d-block w-100' src={blog.image} alt={"slide" + blog.id} />
                                    <Carousel.Caption className='blog-content'>
                                        <h3>{blog.title}</h3>
                                        <p>{blog.description}</p>
                                        <a className='btn btn-primary' href={blog.link}>Learn More<i className='fas fa-chevron-right'></i></a>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })
                    }


                </Carousel>

            </Container>

        </section>
    )
}
export default Blog;



{/* <Row>
    {
        blogData.map(blog => {
            return (
                <Col sm={4} key={blog.id}>
                    <div className='holder'>
                        <Card >
                            <Card.Img variant="top" src={blog.image} />
                            <Card.Body>
                                <span style={{ fontSize: "20px", color: "red" }}>{formattedDate}</span>
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Text>
                                    {blog.description}
                                </Card.Text>
                                <a href={blog.link} className='btn btn-primary'>Read More</a>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            )
        })
    }

</Row> */}
