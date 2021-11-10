import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import logo1 from '../../logo1.png';
import { useAuth } from "../Auth/AuthContext";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Alert, Nav, Navbar, Button, NavDropdown, NavLink, NavbarBrand } from "react-bootstrap";


export default function NavBar() {

    const { currentUser, logout } = useAuth();
    const [error, setError] = useState("");
    const history = useHistory();

    async function handleLogOut() {
        setError("");

        try {
            await logout();
            history.push("/");
        } catch(e) {
            setError("Failed to logout!", e);
        }
    };

    return (
        <>
            <Navbar bg="light" expand="lg" className="container-fluid  rounded-bottom shadow-sm" sticky="top">
                <NavbarBrand className="ms-5" href="/"><img src={logo1} alt="exampath logo" height="40px" /></NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="container-fluid justify-content-end fw-bold me-auto">
                        {currentUser ?
                            <>
                                <NavLink href="/">HOME</NavLink>
                                <NavLink href="/about">ABOUT US</NavLink>
                                <NavDropdown title="EXAMINATIONS" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/examinations/gre">GRE</NavDropdown.Item>
                                    <NavDropdown.Item href="/examinations/toefl">TOELF</NavDropdown.Item>
                                    <NavDropdown.Item href="/examinations/ielts">IELTS</NavDropdown.Item>
                                    <NavDropdown.Item href="/examinations/gmat">GMAT</NavDropdown.Item>
                                    <NavDropdown.Item href="/examinations/gate">GATE</NavDropdown.Item>
                                    <NavDropdown.Item href="/examinations/cat">CAT</NavDropdown.Item>
                                </NavDropdown>
                                <NavLink href="/universities">UNIVERSITIES</NavLink>
                                <Button className="btn btn-dark fw-bold" onClick={handleLogOut}>LOGOUT</Button>
                            </>
                            :
                            <>
                                <NavLink href="/login">LOGIN</NavLink>
                                <NavLink href="/signup">CREATE ACCOUNT</NavLink>
                            </>
                        }
                    </Nav>
                </NavbarCollapse>
            </Navbar>
            {error && <Alert variant="danger"> {error} </Alert>}
        </>
    )
}