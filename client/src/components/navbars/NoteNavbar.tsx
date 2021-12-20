import React from "react";
import { Button, ButtonToolbar, Container, Navbar, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NoteNavbar = () => {
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Thacker Notes Application</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <ButtonToolbar>
                            <Link to="/mainpage">
                                <ButtonGroup className="me-2">
                                    <Button>
                                        MainPage
                                    </Button>
                                </ButtonGroup>
                            </Link>
                            <Link to="/deleteNote">
                                <ButtonGroup className="me-2">
                                    <Button>
                                        Delete Note
                                    </Button>
                                </ButtonGroup>
                            </Link>
                            <Link to="/addNote">
                                <ButtonGroup className="me-2">
                                    <Button>
                                        Add Note
                                    </Button>
                                </ButtonGroup>
                            </Link>
                        </ButtonToolbar>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
