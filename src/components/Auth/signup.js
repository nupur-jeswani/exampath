import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { Link, useHistory } from 'react-router-dom';

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

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
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
            <Card className="m-2 mx-auto" style={{ maxWidth: "400px"}}>
                <Card.Body className="">
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger"> {error} </Alert> }
                    
                    <Form className="justify-content-center" onSubmit={handleSubmit}>
                        <Form.Group id="email" className="mb-2">
                            <Form.Label className="d-flex"> Email </Form.Label>
                            <Form.Control type="email" ref={emailRef} placeholder="name@example.com" required />
                        </Form.Group>
                        <Form.Group id="password" className="mb-2">
                            <Form.Label className="d-flex"> Password </Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label className="d-flex"> Confirm your password </Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        
                        <Button className="w-100 mt-4" type="submit" disabled={loading}> Sign Up </Button>
                    </Form>
                </Card.Body>
                
                <div className="w-100 text-center mt-3 mb-2 p-2 border-top">
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </Card>
            <div className="w-100 text-center mt-2 mb-2 p-2 border-top">
                <Link to="/">Back To HomePage</Link>
            </div>
        </div>
    )
}
