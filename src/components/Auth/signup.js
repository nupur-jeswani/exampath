import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { Link, useHistory } from 'react-router-dom';
import signupimg from "./images/signup.jpg"

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match!');
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/login");
        } catch {
            setError("Failed to create an account!");
        }
        setLoading(false);
    }

    return (
        <div className="m-4">
            <div className="w-100 text-end mt-2 mb-2 p-2">
                <Link to="/" className="bg-gradient p-3 text-white rounded text-decoration-none" style={{"backgroundColor":"#869ab5"}}>Go Back to Landing Page</Link>
            </div>
            <div className="row m-4">
                <div className="col-sm-12 col-md-6 p-5">
                    <img src={signupimg} alt="signup illustration" className="rounded"/>
                </div>
                <div className="col-sm-12 col-md-6 p-5">
                    <Card className="m-5 mx-auto" style={{ maxWidth: "400px" }}>
                        <Card.Body className="">
                            <h2 className="text-center mb-4">Sign Up</h2>
                            <hr />
                            {error && <Alert variant="danger"> {error} </Alert>}

                            <Form className="justify-content-center" onSubmit={handleSubmit}>
                                <Form.Group id="email" className="mb-2">
                                    <Form.Label className="d-flex">Enter your Email </Form.Label>
                                    <Form.Control className="mb-4" type="email" ref={emailRef} placeholder="name@example.com" required />
                                </Form.Group>
                                <Form.Group id="password" className="mb-2">
                                    <Form.Label className="d-flex">Create a Password </Form.Label>
                                    <Form.Control className="mb-4" type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Label className="d-flex"> Confirm your password </Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} required />
                                </Form.Group>

                                <Button className="w-100 mt-4 bg-success" type="submit" disabled={loading}> Sign Up </Button>
                            </Form>
                        </Card.Body>

                        <div className="w-100 text-center mt-3 mb-2 p-2 border-top">
                            Already have an account? <Link to="/login" className="text-decoration-none">Login</Link>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
