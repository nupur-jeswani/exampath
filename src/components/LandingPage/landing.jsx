import React, { useState } from 'react';
import About from '../About/about';
import ExamsList from '../Examinations/examsList';
import "bootstrap/dist/css/bootstrap.min.css";
import { UniCarousel } from '../Universities/carousel';
import { Modal, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function LandingPage() {
    function AskLoginModal() {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
            {}
                <div className="container-fluid m-5 p-5 mx-auto">
                    <Button onClick={handleShow} className="pt-4 pb-4 ps-5 pe-5 fw-bold text-decoration-none fs-4 bg-info text-dark border border-light rounded-pill"> Search for Universities as per preference </Button>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>LOGIN / CREATE ACCOUNT</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Hello User, Login to your account to see those details! If you don't have an account then you can create one right now!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>
                            Close
                        </Button>
                        <Link to="/login" className="pt-2 pb-2 ps-3 pe-3 bg-primary text-white text-decoration-none rounded"> Login </Link>
                        <Link to="/signup" className="pt-2 pb-2 ps-3 pe-3 bg-primary text-white text-decoration-none rounded"> Create Account </Link>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    return (
        <div>
            <About />
            <hr />
            <ExamsList />
            <hr />
            <h1 className="p-5">LIST OF SOME TOP COLLEGES</h1>
            <UniCarousel />
            <AskLoginModal />
        </div>
    )
}
