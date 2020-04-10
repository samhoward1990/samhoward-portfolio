import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import './navbar.css';

const NavbarMenu = () => (
    <Container>
        <Navbar bg="white" className="pt-0 pb-0">
            <h1 className="styled-header p-3 mb-0 ml-5">Sam Howard</h1>
            <Nav className="ml-auto">
                <Nav.Link className="border-right">About Me</Nav.Link>
                <Nav.Link className="border-right">Portfolio</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
            </Nav>
        </Navbar>
    </Container>
);

export default NavbarMenu;