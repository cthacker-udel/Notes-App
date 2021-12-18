import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NoteNavbar = () => {

    return(

        <>
        
            <Navbar bg="light" expand="lg">

                <Container>

                    <Navbar.Brand>Thacker Notes Application</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Link to="/mainpage">
                            <Nav.Link>MainPage</Nav.Link>
                        </Link>

                    </Navbar.Collapse>
                    
                </Container>


            </Navbar>

        </>

    );

};
