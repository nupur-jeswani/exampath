import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import resetimg from "./images/reset.png";

export default function ForgotPassword() {
    const emailRef = useRef();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const { resetPassword } = useAuth();
    // const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setMessage('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage("Check your inbox for further instructions to reset your account password.")

        } catch {
            setError("Failed to reset your account password!");
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
                    <img src={resetimg} alt="signup illustration" className="rounded" height="500px" />
                </div>
                <div className="col-sm-12 col-md-6 p-5">
                    <Card className="m-2 mx-auto" style={{ maxWidth: "400px" }}>
                        <Card.Body className="">
                            <h2 className="text-center mb-4">Reset Password</h2>
                            <hr />
                            {error && <Alert variant="danger"> {error} </Alert>}
                            {message && <Alert variant="success"> {message} </Alert>}

                            <Form className="justify-content-center" onSubmit={handleSubmit}>
                                <Form.Group id="email" className="mb-2">
                                    <Form.Label className="d-flex mt-4"> Email </Form.Label>
                                    <Form.Control type="email" ref={emailRef} placeholder="name@example.com" required />
                                </Form.Group>

                                <Button className="w-100 mt-4" type="submit" disabled={loading}> Reset Password </Button>
                            </Form>
                            <div className="w-100 text-end mt-4">
                                <Link to="/login" className="text-decoration-none">Go back to Login</Link>
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
