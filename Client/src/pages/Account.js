import { useState, useEffect } from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {Form, Button, Container, Row, Col, Card} from "react-bootstrap";

function Account(props) {
    const { userId } = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [state, setState] = useState("");
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null); // State to store user data



    useEffect(() => {
        const fetchData = async () => {
            if (userId) { // Check if userId is available
                try {
                    console.log(userId);
                    const response = await fetch(`http://localhost:8080/account?userId=${userId}`, {
                        method: 'GET',
                        headers: {
                            'Accept' : 'application/json',
                            'Content-Type' : 'application/json'
                        }
                    });
                    const status = response.status;
                    const responseJson = await response.json();
                    console.log('responseJson', responseJson);
                    if (status === 200) {
                        setUserData(responseJson);
                        setFirstName(responseJson.firstName);
                        setLastName(responseJson.lastName);
                        setAddress1(responseJson.address1);
                        setAddress2(responseJson.address2);
                        setCity(responseJson.city);
                        setZipCode(responseJson.zipCode);
                        setPhoneNumber(responseJson.zipCode);
                        setEmail(responseJson.email);
                        setState(responseJson.state);// Set user data in state
                    }
                    else if (status === 204) {
                        setUserData({});
                    }
                    else {
                        alert('Error fetching user data');
                    }
                } catch (e) {
                    console.log(`Error: ${e.message}`);
                }
            }
        };
        fetchData();
    }, [userId]);



    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await fetch('http://localhost:8080/account', {
                method: userData? 'PUT' : 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({userId, firstName, lastName, address1, address2, city, zipCode, phoneNumber, email, state})
            });
            const status = response.status;
            const responseJson = await  response.json();
            console.log('responseJson', responseJson);
            if (status === 201) {
                navigate('/');
            }
            else if (status === 200) {
                setUserData(responseJson);
            }
            else {
                alert('Invalid Credentials')
            }
        } catch (e) {
            alert(`Error: ${e.message}`);
        }
    }

    return (
        <>
            <Container fluid className="mt-4">
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>Your Account</Card.Header>
                            <Card.Body>
                                <Form className={"text-white"} onSubmit={handleSubmit}>
                                    <AccountForms
                                        id="firstName"
                                        text="First Name"
                                        placeholder="Enter your first name"
                                        required={true}
                                        value={firstName}
                                        onchange={(e) => setFirstName(e.target.value)}
                                    />
                                    <AccountForms
                                        id="lastName"
                                        text="Last Name"
                                        placeholder="Enter your last name"
                                        required={true}
                                        value={lastName}
                                        onchange={(e) => setLastName(e.target.value)}
                                    />
                                    <AccountForms
                                        id="address1"
                                        text="Address Line 1"
                                        placeholder="Enter your address line 1"
                                        required={true}
                                        value={address1}
                                        onchange={(e) => setAddress1(e.target.value)}
                                    />
                                    <AccountForms
                                        id="address2"
                                        text="Address Line 2"
                                        placeholder="Enter your address line 2"
                                        required={false}
                                        value={address2}
                                        onchange={(e) => setAddress2(e.target.value)}
                                    />
                                    <AccountForms
                                        id="city"
                                        text="City"
                                        placeholder="Enter your city"
                                        required={true}
                                        value={city}
                                        onchange={(e) => setCity(e.target.value)}
                                    />
                                    <AccountForms
                                        id="zipCode"
                                        text="Zip Code"
                                        placeholder="Enter your zip code"
                                        required={true}
                                        value={zipCode}
                                        onchange={(e) => setZipCode(e.target.value)}
                                    />
                                    <AccountForms
                                        id="phoneNumber"
                                        text="Phone Number"
                                        placeholder="Enter your Phone Number"
                                        required={true}
                                        value={phoneNumber}
                                        onchange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                    <AccountForms
                                        id="email"
                                        text="Email"
                                        placeholder="Enter your email address"
                                        required={true}
                                        value={email}
                                        onchange={(e) => setEmail(e.target.value)}
                                    />
                                    <Form.Group className="mb-3" controlId="state">
                                        <Form.Label>Select your State</Form.Label>
                                        <Form.Select required={true} value={state} onChange={(e) => setState(e.target.value)}>
                                            <option value="">Select your state</option>
                                            <option value="AL">Alabama</option>
                                            <option value="AK">Alaska</option>
                                            <option value="AZ">Arizona</option>
                                            <option value="AR">Arkansas</option>
                                            <option value="CA">California</option>
                                            <option value="CO">Colorado</option>
                                            <option value="CT">Connecticut</option>
                                            <option value="DE">Delaware</option>
                                            <option value="DC">District Of Columbia</option>
                                            <option value="FL">Florida</option>
                                            <option value="GA">Georgia</option>
                                            <option value="HI">Hawaii</option>
                                            <option value="ID">Idaho</option>
                                            <option value="IL">Illinois</option>
                                            <option value="IN">Indiana</option>
                                            <option value="IA">Iowa</option>
                                            <option value="KS">Kansas</option>
                                            <option value="KY">Kentucky</option>
                                            <option value="LA">Louisiana</option>
                                            <option value="ME">Maine</option>
                                            <option value="MD">Maryland</option>
                                            <option value="MA">Massachusetts</option>
                                            <option value="MI">Michigan</option>
                                            <option value="MN">Minnesota</option>
                                            <option value="MS">Mississippi</option>
                                            <option value="MO">Missouri</option>
                                            <option value="MT">Montana</option>
                                            <option value="NE">Nebraska</option>
                                            <option value="NV">Nevada</option>
                                            <option value="NH">New Hampshire</option>
                                            <option value="NJ">New Jersey</option>
                                            <option value="NM">New Mexico</option>
                                            <option value="NY">New York</option>
                                            <option value="NC">North Carolina</option>
                                            <option value="ND">North Dakota</option>
                                            <option value="OH">Ohio</option>
                                            <option value="OK">Oklahoma</option>
                                            <option value="OR">Oregon</option>
                                            <option value="PA">Pennsylvania</option>
                                            <option value="RI">Rhode Island</option>
                                            <option value="SC">South Carolina</option>
                                            <option value="SD">South Dakota</option>
                                            <option value="TN">Tennessee</option>
                                            <option value="TX">Texas</option>
                                            <option value="UT">Utah</option>
                                            <option value="VT">Vermont</option>
                                            <option value="VA">Virginia</option>
                                            <option value="WA">Washington</option>
                                            <option value="WV">West Virginia</option>
                                            <option value="WI">Wisconsin</option>
                                            <option value="WY">Wyoming</option>
                                        </Form.Select>
                                    </Form.Group>
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

function AccountForms(props) {
    return (
        <Form.Group className="mb-3" controlId={props.id}>
            <Form.Label>{props.text}</Form.Label>
            <Form.Control
                type="text"
                placeholder={props.placeholder}
                name={props.id}
                required={props.required}
                value={props.value}
                onChange={props.onchange}
            />
        </Form.Group>
    );
}

export default Account;