import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function Header() {

    const whatsappUrl = `https://wa.me/${+917990528002}`;
    const phoneNumber = 7990528002;
    function handleButtonClick() {
        window.open('tel:+7990528002', '_blank');
    }


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">POWERON</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-5">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#about">ABOUT</Nav.Link>
                        <Nav.Link href="#services">SERVICES</Nav.Link>
                        <Nav.Link href="#testimonials">TESTIMONIALS</Nav.Link>
                        <Nav.Link href="#pricing">PRICING</Nav.Link>
                        <Nav.Link href="#blog">BLOG</Nav.Link>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                        <a href={whatsappUrl}><Button variant="success"><i className="fa-brands fa-whatsapp" style={{ marginRight: "5px" }}></i>Chat on Wapp</Button></a>
                        <a style={{ marginLeft: "10px" }}><Button variant="danger" onClick={handleButtonClick}><i className="fa-solid fa-phone" style={{ marginRight: "5px" }}></i>7990528002</Button></a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}





export default Header;