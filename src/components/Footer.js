import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
function Footer() {
    const [showTopBtn, setshowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setshowTopBtn(true)
            }
            else {
                setshowTopBtn(false)
            }
        })
    }, []);

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <Container fluid>
            <div className="copyright">
                &copy;2024 Corporate.All Right Reserved.
            </div>
            <div className="socials">
                <ul>
                    <li><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/chandni-bhalodia-99714b176/?originalSubdomain=in"><i className="fab fa-linkedin-in"></i></a></li>

                </ul>

            </div>
            {
                showTopBtn && (<div className='go-top' onClick={goTop}></div>)
            }
        </Container>
    )
}
export default Footer;