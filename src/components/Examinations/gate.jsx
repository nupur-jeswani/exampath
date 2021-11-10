import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./examinations.css";
import { Offcanvas } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import gate from "./images/gate-img.png";

export const Gate = () => {

    // Core GATE States
    const [about, setAbout] = useState("");
    const [gateRecentChanges, setGateRecentChanges] = useState([]);
    const [gateCutOff, setGateCutOff] = useState([]);
    const [gateMotive, setGateMotive] = useState([]);
    const [examFee, setExamFee] = useState([]);
    const [prepTips, setPrepTips] = useState([]);

    // Subsidary GATE States

    // GATE exam pattern information states
    const [examPattern, setExamPattern] = useState([]);
    const [gateNumerical, setGateNumerical] = useState([]);
    const [gateVerbal, setGateVerbal] = useState([]);

    // GATE registration process states
    const [gateOnlineReg, setGateOnlineReg] = useState([]);
    const [gateAppForm, setGateAppForm] = useState([]);
    const [gateReqDocs, setGateReqDocs] = useState([]);
    const [gatePayment, setGatePayment] = useState([]);
    const [gateOnlinePay, setGateOnlinePay] = useState([]);
    const [gateDeclaration, setGateDeclaration] = useState([]);
    const [gateEditForm, setGateEditForm] = useState([]);


    // getting data and saving it in the state
    useEffect(() => {
        const getDetails = async () => {
            const docRef = doc(db, "examinations", "GATE");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let data = docSnap.data();
                setAbout(data.about);
                setGateMotive(data.GATEmotive);
                setGateRecentChanges(data["What’s new in the GATE Exam 2022?"]);
                setGateCutOff(data.cutoff);
                setExamFee(data.examFee);
                setPrepTips(data.preparationTips);

            } else {
                console.log("No such document!");
            }
        }

        getDetails();
    }, []);

    useEffect(() => {
        const getDetails = async () => {
            const registrationRef = doc(db, "examinations", "GATE", "Registration", "Steps to register")
            const registrationSnap = await getDoc(registrationRef);

            if (registrationSnap.exists()) {
                let data = registrationSnap.data();
                setGateOnlineReg(data["Step 1: GATE Registration"]);
                setGateAppForm(data["Step 2: Filling of GATE Application Form 2022"]);
                setGateReqDocs(data["Step 3: Upload Required Documents for GATE Registration"]);
                setGatePayment(data["Step 4: Payment of GATE Application Fee 2022"]);
                setGateOnlinePay(data["Step 5: Online Net-Banking Payment Details:"]);
                setGateDeclaration(data["Step 6: Accepting the Declaration"]);
                setGateEditForm(data["Steps to edit:GATE 2022 Application Correction"]);
            } else {
                console.log("No such document!");
            }
        }

        getDetails();
    }, []);

    console.log(gateOnlineReg);

    useEffect(() => {
        const getDetails = async () => {
            const examPatternRef = doc(db, "examinations", "GATE", "Exam Pattern Information", "Information");
            const examPatternSnap = await getDoc(examPatternRef);

            if (examPatternSnap.exists()) {
                let data = examPatternSnap.data();
                setExamPattern(data["Exam Pattern"]);
                setGateNumerical(data["Numerical Ability"]);
                setGateVerbal(data["Verbal Ability"]);
            } else {
                console.log("No such document!");
            }
        }

        getDetails();
    }, []);

    function Contents() {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
                <Button style={{ "backgroundColor": "rgb(121, 198, 201)", "color": "black" }} onClick={handleShow} className="fw-bolder pt-2 ps-4 pe-4 position-fixed bottom-0 end-0">
                    TABLE OF CONTENTS
                </Button>

                <Offcanvas show={show} onHide={handleClose} className="bg-dark">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title style={{ "color": "burlywood", "font-weight": "600" }}>Table of Contents</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="index">
                            <p>Introduction To GATE - </p>
                            <a href="#about">About GATE Examination</a>
                            <a href="#motive">Why should one choose to give GATE?</a>
                            <a href="#cutoffDetails">Result information for GATE Examination</a>
                            <a href="#preptips">Preparation Tips for GATE Examination</a>
                            <a href="#examFees">Fees for GATE Examination</a>
                            <a href="#changes">Changes in GATE-2022</a>

                            <p>GATE Registration -</p>
                            <ul>
                                <li><a href="#registrationstep1">Step 1 in the registration procedure</a></li>
                                <li><a href="#registrationstep2">Step 2 in the registration procedure </a></li>
                                <li><a href="#registrationstep3">Step 3 in the registration procedure</a></li>
                                <li><a href="#registrationstep4">Step 4 in the registration procedure</a></li>
                                <li><a href="#registrationstep5">Step 5 in the registration procedure</a></li>
                                <li><a href="#registrationstep6">Step 6 in the registration procedure</a></li>
                                <li><a href="#editform">Steps to edit your registration form</a></li>
                            </ul>

                            <p>Core Details of GATE Examination -</p>
                            <a href="#examPattern">Introduction to GATE Examination</a>
                            <ul>
                                <li><a href="#verbalAbility">GATE Verbal Ability Section</a></li>
                                <li><a href="#numericalAbility">GATE Numerical Ability Section</a></li>
                            </ul>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    }

    return (
        <div className="container-fluid bg-light">
            <Contents />
            <div className="container">
                <div className="about-exam">
                    <div className="backdrop">
                        <img src={gate} alt="GATE Illustration Backdrop" height="600px" />
                        <div className="container-fluid image-content">
                            <h1 className="fw-bolder">GRADUATE APTITUDE TEST IN ENGINEERING</h1>
                            <h4>(GATE)</h4>
                        </div>
                    </div>
                    {/* Basic GATE information */}

                    <h3 id="about" className="heading">ABOUT THE EXAMINATION</h3>
                    <p>{about}</p>

                    <h3 id="motive" className="heading">WHY SHOULD ONE CONSIDER GIVING GATE?</h3>
                    <ul>
                        {gateMotive.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="cutoffDetails" className="heading">CUTOFF DETAILS OF GATE</h3>
                    <ul>
                        {gateCutOff.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="preptips" className="heading">PREPARATION TIPS FOR GATE EXAMINATION</h3>
                    <ul>
                        {prepTips.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="examFees" className="heading">FEES FOR GATE EXAMINATION</h3>
                    <ul>
                        {examFee.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="changes" className="heading">WHAT CHANGES WILL BE THERE IN GATE-2022? </h3>
                    <ul>
                        {gateRecentChanges.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 className="heading">REGISTRATION INFORMATION FOR GATE EXAMINATION</h3>

                    <h4 className="heading">STEPS TO FOLLOW FOR GATE REGISTRATION</h4>

                    <h5 id="registrationstep1" className="heading">Step 1: GATE REGISTRATION</h5>
                    <ul>
                        {gateOnlineReg.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5 id="registrationstep2" className="heading">Step 2: FILLING OF GATE ADMISSION FORM 2022</h5>
                    <ul>
                        {gateAppForm.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5 id="registrationstep3" className="heading">Step 3: UPLOAD REQUIRED DOCUMENTS FOR GATE REGISTRATION</h5>
                    <ul>
                        {gateReqDocs.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5 id="registrationstep4" className="heading">Step 4: PAYMENT OF GATE APPLICATION FEE</h5>
                    <ul>
                        {gatePayment.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5 id="registrationstep5" className="heading">Step 5: ONLINE NET BANKING PAYMENT INFORMATION</h5>
                    <ul>
                        {gateOnlinePay.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5 id="registrationstep6" className="heading">Step 6: ACCEPTING THE DECLARATION</h5>
                    <ul>
                        {gateDeclaration.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5 id="editform" className="heading">STEPS TO EDIT - GATE-2022 APPLICATION CORRECTION</h5>
                    <ul>
                        {gateEditForm.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 className="heading">GATE EXAM PATTERN DETAILS</h3>

                    <h4 id="examPattern" className="heading">EXAM PATTERN INFORMATION OF GATE</h4>
                    <ul>
                        {examPattern.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5 id="verbalAbility" className="heading">VERBAL ABILITY SECTION - </h5>
                    <ul>
                        {gateVerbal.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5 id="numericalAbility" className="heading">NUMERICAL ABILITY SECTION - </h5>
                    <ul>
                        {gateNumerical.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
}