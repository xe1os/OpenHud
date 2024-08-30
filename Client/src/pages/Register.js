import { useState } from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {Form, Button, Container, Row, Col, Card} from "react-bootstrap";
import "../styles/login.css";
function Register(props) {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({userName, password, email})
            });
            const status = response.status;
            const responseJson = await  response.json();
            console.log('responseJson', responseJson);
            if (status === 201) {
                navigate('/');
            } else {
                alert('Account already exists')
            }
        } catch (e) {
            alert(`Error: ${e.message}`);
        }
    }

    return (
        <>
            <Container className="mt-4">
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>Register</Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit} className={"text-white"}>
                                    <RegisterForms
                                        id={"username"}
                                        type="text"
                                        text="Username"
                                        placeholder="Enter username"
                                        required={true}
                                        value={userName}
                                        onchange={(e)=> setUserName(e.target.value)}
                                    />
                                    <RegisterForms
                                        id={"email"}
                                        type="email"
                                        text="Email Address"
                                        placeholder="Enter email"
                                        required={true}
                                        value={email}
                                        onchange={(e)=> setEmail(e.target.value)}
                                    />
                                    <RegisterForms
                                        id={"password"}
                                        type="password"
                                        text="Password"
                                        placeholder="Enter password"
                                        required={true}
                                        value={password}
                                        onchange={(e)=> setPassword(e.target.value)}
                                    />
                                    <Button variant="primary" type="submit">Submit</Button>
                                    <Button variant="secondary" type="reset">Reset</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

function RegisterForms(props) {
    return(
        <Form.Group className="mb-3" controlId={props.id}>
            <Form.Label>{props.text}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} required={props.required} onChange={props.onchange} value={props.value}/>
        </Form.Group>
    );
}
export default Register;