import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import gre from "./images/gre-img.png";
import cat from "./images/cat-img.png";
import gate from "./images/gate-img.png";
import gmat from "./images/gmat-img.jpg";
import ielts from "./images/ielts-img.jpg";
import toefl from "./images/toefl-img.png";
import { Card } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import { useAuth } from "../Auth/AuthContext";

export default function ExamsList() {

    const { currentUser } = useAuth();

    function AskLoginModal(linkPath) {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        var link = linkPath.linkPath;

        return (
            <>
                {
                    currentUser ?
                        <>
                            <Card.Link href={link} className="text-decoration-none bg-dark bg-gradient pt-2 ps-3 pb-2 pe-3 text-white rounded">View Details</Card.Link>
                        </> :
                        <>
                            <Button onClick={handleShow} className="bg-dark bg-gradient pt-2 ps-3 pb-2 pe-3 text-white rounded"> View Details </Button>
                        </>
                }
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>LOGIN / CREATE ACCOUNT</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Hello User, Login to your account to see those details! If you don't have an account then you can create one right now!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    return (
        <div className="container mx-auto">
            <div className="row mt-5 pt-5">
                <h1>LIST OF EXAMINATIONS</h1>
            </div>
            <div className="row m-3 p-5">
                <div className="col-sm-12 col-md-4">
                    <Card style={{ width: '18rem' }} className="m-4 ">
                        <Card.Img variant="top" src={gre} />
                        <Card.Body>
                            <Card.Title>Graduate Record Examination (GRE)</Card.Title>
                            <hr />
                            <Card.Text className="mb-5">
                                GRE or Graduate Record Examinations is the entrance exam taken to pursue postgraduate studies in English-speaking nations.
                            </Card.Text>
                            <AskLoginModal linkPath={"/examinations/gre"} />
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-sm-12 col-md-4">
                    <Card style={{ width: '18rem' }} className="m-4">
                        <Card.Img variant="top" src={ielts} />
                        <Card.Body>
                            <Card.Title>International English Language Testing System (IELTS) </Card.Title>
                            <hr />
                            <Card.Text className="mb-5">
                                IELTS is the world’s most popular English language proficiency test conducted by IDP for higher education and migration.
                            </Card.Text>
                            <AskLoginModal linkPath="/examinations/ielts" />
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-sm-12 col-md-4">
                    <Card style={{ width: '18rem' }} className="m-4">
                        <Card.Img variant="top" src={toefl} />
                        <Card.Body>
                            <Card.Title>Test of English as a Foreign Language (TOEFL)</Card.Title>
                            <hr />
                            <Card.Text className="mb-5">
                                TOEFL is a computerized exam that tests the candidates’ English knowledge required to study, work, or migrate abroad.
                            </Card.Text>
                            <AskLoginModal linkPath="/examinations/toefl" />
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-sm-12 col-md-4">
                    <Card style={{ width: '18rem' }} className="m-4">
                        <Card.Img variant="top" src={gmat} />
                        <Card.Body>
                            <Card.Title>Graduate Management Admission Test (GMAT)</Card.Title>
                            <hr />
                            <Card.Text className="mb-5">
                                GMAT is a computer adaptive test taken to pursue management studies abroad.
                            </Card.Text>
                            <AskLoginModal linkPath="/examinations/gmat" />
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-sm-12 col-md-4">
                    <Card style={{ width: '18rem' }} className="m-4">
                        <Card.Img variant="top" src={gate} />
                        <Card.Body>
                            <Card.Title>Graduate Aptitute Test in Engineering (GATE)</Card.Title>
                            <hr />
                            <Card.Text className="mb-5">
                                It is an examination that primarily tests the comprehensive understanding of various undergraduate subjects in engineering and science.
                            </Card.Text>
                            <AskLoginModal linkPath="/examinations/gate" />
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-sm-12 col-md-3">
                    <Card style={{ width: '18rem' }} className="m-4">
                        <Card.Img variant="top" src={cat} />
                        <Card.Body>
                            <Card.Title>Common Admission Test (CAT)</Card.Title>
                            <hr />
                            <Card.Text className="mb-5">
                                The Common Admission Test is a computer based test for admission in a graduate management programs.
                            </Card.Text>
                            <AskLoginModal linkPath="/examinations/cat" />
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    )
}
