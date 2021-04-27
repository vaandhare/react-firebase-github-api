import React from 'react';
import { Container } from 'reactstrap'

const Footer = () => {
    return (
        <Container fluid tag="footer" className="text-center bg-primary text-white text-uppercase fixed-bottom p-3">
            React Application using Firebase and Github API by Vaibhav Andhare
        </Container>
    )
}

export default Footer;