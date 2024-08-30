import { useState } from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {Form, Button, Container, Row, Col, Card} from "react-bootstrap";
import "../styles/login.css";
function Login(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { handleLogin } = props;
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({userName, password})
            });
            const status = response.status;
            const responseJson = await  response.json();
            console.log(responseJson);
            if (status === 200) {
                handleLogin(true, responseJson.id);
                navigate('/');
            } else {
                alert('Incorrect credentials')
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
                            <Card.Header>Login</Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit} className={"text-white"}>
                                    <LoginForms
                                        type="text"
                                        text="Username"
                                        placeholder="Enter Username"
                                        required={true}
                                        onchange={(e) => setUserName(e.target.value)}
                                        value={userName}
                                    />
                                    <LoginForms
                                        type="password"
                                        text="Password"
                                        placeholder="Enter password"
                                        required={true}
                                        onchange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">Login</Button>
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

function LoginForms(props) {
    return(
        <Form.Group className="mb-3" controlId={props.type}>
            <Form.Label>{props.text}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} required={props.required} onChange={props.onchange} value={props.value}/>
        </Form.Group>
    );
}
export default Login;