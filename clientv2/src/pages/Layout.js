import {Link, Outlet, Navigate, useNavigate} from "react-router-dom";

import "../styles/layout.css";
import Logo from "../assets/Logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";

const Layout = (props) => {
    return (
        <>
            <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={Logo} width={"90px"} height={"50px"}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/matches">Matches</Nav.Link>
                            <Nav.Link as={Link} to="/teams">Teams</Nav.Link>
                            <Nav.Link as={Link} to="/players">Players</Nav.Link>
                            <Nav.Link as={Link} to="/tournaments">Tournaments</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                            <Nav.Link as={Link} to="/account">Account</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    );
}

export default Layout;