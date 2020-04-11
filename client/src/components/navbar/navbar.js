import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import './navbar.css';
import { Link } from 'react-router-dom';

const NavbarMenu = () => (
    <Container>
        <Navbar bg="white" className="pt-0 pb-0">
            <h1 className="styled-header p-3 mb-0 ml-5">Sam Howard</h1>
            <Nav className="ml-auto">
                <Link to="/" className="nav-link border-right">About Me</Link>
                <Link to="/portfolio" className="nav-link border-right">Portfolio</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </Nav>
        </Navbar>
    </Container>
);

export default NavbarMenu;