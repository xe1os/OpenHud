import React from "react";
import './styles/sidebar.css'
import { Row, Container, Nav } from "react-bootstrap";

const Sidebar = (props) => {
    return (
        <Container fluid>
            <Row>
                <div className="bg-dark col-auto cold-md-3 min-vh-100">
                    <a className="text-decoration-none text-white d-flex aligh-itemcenter">
                        <i className="fs-4 bi bi-speedometer"/>
                        <span className="ms-1 fs-4">Brand</span>
                    </a>
                </div>
            </Row>
        </Container>
    );
}

export default Sidebar;