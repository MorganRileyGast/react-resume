import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

function SiteNavbar() {
    const location = useLocation();
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/" onClick={() => setExpanded(false)}>
                    <i className="bi bi-house-fill" aria-hidden />
                    {' '}
                    Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : 'expanded')} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" activeKey={location.pathname}>
                        <Nav.Link as={NavLink} to="/skills" onClick={() => setExpanded(false)}>
                            <i className="bi bi-card-list" aria-hidden />
                            {' '}
                            Skills
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/career" onClick={() => setExpanded(false)}>
                            <i className="bi bi-briefcase-fill" aria-hidden />
                            {' '}
                            Career
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/education" onClick={() => setExpanded(false)}>
                            <i className="bi bi-mortarboard-fill" aria-hidden />
                            {' '}
                            Education
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/contact" onClick={() => setExpanded(false)}>
                            <i className="bi bi-envelope-at-fill" aria-hidden />
                            {' '}
                            Contact
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/credits" onClick={() => setExpanded(false)}>
                            <i className="bi bi-tags-fill" aria-hidden />
                            {' '}
                            Credits
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SiteNavbar;
