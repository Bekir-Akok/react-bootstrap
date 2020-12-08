import React from 'react';
import { Navbar, Nav, NavDropdown,Container } from 'react-bootstrap';

const navBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
            <Container>
                    <Navbar.Brand href="#home"> <span className="bepin">BePin |</span> React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <NavDropdown title="Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Services1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Services2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Services3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">giving an offer</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">Portfolio</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Contact
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}


export default navBar ;