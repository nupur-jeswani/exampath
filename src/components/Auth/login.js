import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { Link, useHistory } from 'react-router-dom';

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
            <Card className="m-2 mx-auto" style={{ maxWidth: "400px" }}>
                <Card.Body className="">
                    <h2 className="text-center mb-4">Login</h2>
                    {error && <Alert variant="danger"> {error} </Alert>}

                    <Form className="justify-content-center" onSubmit={handleSubmit}>
                        <Form.Group id="email" className="mb-2">
                            <Form.Label className="d-flex"> Email </Form.Label>
                            <Form.Control type="email" ref={emailRef} placeholder="name@example.com" required />
                        </Form.Group>
                        <Form.Group id="password" className="mb-2">
                            <Form.Label className="d-flex"> Password </Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button className="w-100 mt-4" type="submit" disabled={loading}> Login </Button>
                    </Form>
                    <div className="w-100 text-end mt-4">
                        <Link to="/forgotpassword">Forgot Password?</Link>
                    </div>
                </Card.Body>

                <div className="w-100 text-center mt-2 mb-2 p-2 border-top">
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>
            </Card>
            <div className="w-100 text-center mt-2 mb-2 p-2 border-top">
                <Link to="/">Back To HomePage</Link>
            </div>
        </div>
    )
}
