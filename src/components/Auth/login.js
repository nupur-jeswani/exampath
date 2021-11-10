import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { Link, useHistory } from 'react-router-dom';
import loginimg from "./images/login2.jpg";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError("Failed to log in to your  account!");
        }
        setLoading(false);
    }

    return (
        <div className="m-4">
            <div className="w-100 text-end mt-2 mb-2 p-2">
                <Link to="/" className="bg-gradient p-3 text-white rounded text-decoration-none" style={{ "backgroundColor": "#869ab5" }}>Go Back to Landing Page</Link>
            </div>
            <div className="row m-4">
                <div className="col-sm-12 col-md-6 ps-3">
                    <img src={loginimg} alt="signup illustration" className="rounded" />
                </div>
                <div className="col-sm-12 col-md-6 p-5">
                    <Card className="m-2 mx-auto" style={{ maxWidth: "400px" }}>
                        <Card.Body className="">
                            <h2 className="text-center mb-4">Login</h2>
                            <hr />
                            {error && <Alert variant="danger"> {error} </Alert>}

                            <Form className="justify-content-center" onSubmit={handleSubmit}>
                                <Form.Group id="email" className="mb-2">
                                    <Form.Label className="d-flex"> Email </Form.Label>
                                    <Form.Control className="mb-4" type="email" ref={emailRef} placeholder="name@example.com" required />
                                </Form.Group>
                                <Form.Group id="password" className="mb-2">
                                    <Form.Label className="d-flex"> Password </Form.Label>
                                    <Form.Control className="mb-4" type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Button className="w-100 mt-4 bg-success" type="submit" disabled={loading}> Login </Button>
                            </Form>
                            <div className="w-100 text-end mt-4">
                                <Link to="/forgotpassword" className="text-decoration-none">Forgot Password?</Link>
                            </div>
                        </Card.Body>

                        <div className="w-100 text-center mt-2 mb-2 p-2 border-top">
                            Need an account? <Link to="/signup" className="text-decoration-none">Sign Up</Link>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
