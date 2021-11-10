import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./examinations.css";
import { Offcanvas } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import gmat from "./images/gmat-img.jpg";

export const Gmat = () => {

    // Core GMAT States
    const [about, setAbout] = useState("");
    const [gmatMotive, setGmatMotive] = useState([]);
    const [examFee, setExamFee] = useState("");
    const [prepTips, setPrepTips] = useState([]);

    // Subsidary GMAT States

    // GMAT exam pattern information states
    const [examPattern, setExamPattern] = useState([]);
    const [gmatAnalytical, setGmatAnalytical] = useState([]);
    const [gmatIntegrated, setGmatIntegrated] = useState([]);
    const [gmatQuantitative, setGmatQuantitative] = useState([]);
    const [gmatVerbal, setGmatVerbal] = useState([]);
    const [gmatSectionDetail, setGmatSectionDetail] = useState([]);

    // GMAT exam pattern types of scoores states
    const [gmatAWAScore, setGmatAWAScore] = useState([]);
    const [gmatIRScore, setGmatIRScore] = useState([]);
    const [gmatQuantScore, setGmatQuantScore] = useState([]);
    const [gmatVerbalScore, setGmatVerbalScore] = useState([]);

    // GMAT registration process states
    const [gmatOnlineReg, setGmatOnlineReg] = useState([]);
    const [gmatMailReg, setGmatMailReg] = useState([]);
    const [gmatPhoneReg, setGmatPhoneReg] = useState([]);
    const [gmatRegInfo, setGmatRegInfo] = useState([]);
    const [gmatOfflinePay, setGmatOfflinePay] = useState([]);
    const [gmatOnlinePay, setGmatOnlinePay] = useState([]);

    // GMAT results and cutoffs
    const [gmatGeneralCutoff, setGmatGeneralCutoff] = useState("");
    const [gmatFactorsForCutoff, setGmatFactorsForCutoff] = useState([]);
    const [gmatRecentCutoff, setGmatRecentCutoff] = useState([]);
    const [gmatCutoffIndia, setGmatCutoffIndia] = useState([]);

    // getting data and saving it in the state
    useEffect(() => {
        const getDetails = async () => {
            const docRef = doc(db, "examinations", "GMAT");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let data = docSnap.data();
                setGmatMotive(data.GMATmotive);
                setAbout(data.about);
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
            const examPatternRef = doc(db, "examinations", "GMAT", "Exam Pattern Information", "Information");
            const examPatternSnap = await getDoc(examPatternRef);

            if (examPatternSnap.exists()) {
                let data = examPatternSnap.data();
                console.log(data);
                setExamPattern(data["Exam pattern "]);
                setGmatAnalytical(data["GMAT Analytical Writing Assessment:"]);
                setGmatIntegrated(data["GMAT Integrated Reasoning Section:"]);
                setGmatQuantitative(data["GMAT Quantitative Reasoning:"]);
                setGmatVerbal(data["GMAT Verbal Reasoning:"]);
                setGmatSectionDetail(data["Section-Wise details of Exam "]);
            } else {
                console.log("No such document!");
            }
        }

        getDetails();
    }, []);

    useEffect(() => {
        const getDetails = async () => {
            const examScoresRef = doc(db, "examinations", "GMAT", "Exam Pattern Information", "Types of Scores ")
            const examScoresSnap = await getDoc(examScoresRef);

            if (examScoresSnap.exists()) {
                let data = examScoresSnap.data();
                setGmatAWAScore(data["GMAT AWA Score:"]);
                setGmatIRScore(data["GMAT IR Score"]);
                setGmatQuantScore(data["GMAT Quant Score"]);
                setGmatVerbalScore(data["GMAT Quant Score"]);
            } else {
                console.log("No such document!");
            }
        }

        getDetails();
    }, []);

    useEffect(() => {
        const getDetails = async () => {
            const registrationRef = doc(db, "examinations", "GMAT", "Registration", "Process")
            const registrationSnap = await getDoc(registrationRef);

            if (registrationSnap.exists()) {
                let data = registrationSnap.data();
                setGmatOnlineReg(data["GMAT Online Registration process"]);
                setGmatMailReg(data["GMAT Registration via Mail process"]);
                setGmatPhoneReg(data["GMAT Registration via Phone"]);
                setGmatRegInfo(data["Information you’ll need handy for GMAT registration process:"]);
                setGmatOfflinePay(data["Offline Payment Mode process:"]);
                setGmatOnlinePay(data["Online Payment Mode process:"]);
            } else {
                console.log("No such document!");
            }
        }

        getDetails();
    }, []);

    useEffect(() => {
        const getDetails = async () => {
            const resultandcutoffRef = doc(db, "examinations", "GMAT", "Results and CutOffs", "YSa0y8De0hxFRFwTTYkV")
            const resultandcutoffSnap = await getDoc(resultandcutoffRef);

            if (resultandcutoffSnap.exists()) {
                let data = resultandcutoffSnap.data();
                setGmatGeneralCutoff(data["CutOffs in general"]);
                setGmatFactorsForCutoff(data["Factors Determining GMAT Cutoff for an Institution"]);
                setGmatRecentCutoff(data["GMAT Cutoff 2021"]);
                setGmatCutoffIndia(data["GMAT Cutoff For Top B-Schools in India"]);
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
                            <p>Introduction To TOEFL - </p>
                            <a href="#about">About TOEFL Examination</a>
                            <a href="#motive">Why should one choose to give TOEFL?</a>

                            <p>TOEFL Registration -</p>
                            <a href="#registrationIntro">Registration Details</a>
                            <a href="#eligibilityTest">Eligibility Test</a>
                            <a href="#docs">Documents required for Registration</a>
                            <a href="#fee-and-pay">Registration Fees and Payment mode</a>
                            <a href="#formCancellation">Cancelling Form / Rescheduling Details</a>

                            <p>Core Details of TOEFL Examination -</p>
                            <a href="#examPatternIntro">Introduction to TOEFL Examination</a>
                            <a href="#examSyllabus">TOEFL Syllabus</a>
                            <ul>
                                <li><a href="#readingSection">TOEFL Reading Section</a></li>
                                <li><a href="#speakingSection">TOEFL Speaking Section</a></li>
                                <li><a href="#writingSection">TOEFL Writing Section</a></li>
                                <li><a href="#listeningSection">TOEFL Listening Section</a></li>
                            </ul>

                            <p>Results and Scoring information -</p>
                            <a href="#calScore">Calculating Scores</a>
                            <a href="#scoreRange">Score Range</a>

                            <p>Section wise Scoring pattern -</p>
                            <ul>
                                <li><a href="#readingListeningScore">TOEFL Reading and Listening Section</a></li>
                                <li><a href="#speakingScore">TOEFL Speaking Section</a></li>
                                <li><a href="#writingScore">TOEFL Writing Section</a></li>
                            </ul>

                            <a href="#getResult">Getting your TOEFL Scores</a>
                            <a href="#reportScore">Reporting your TOEFL Scores</a>
                            <a href="#convertScore">Converting Scores to Percentile</a>
                            <a href="#difference">IELTS OR TOEFL?</a>
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
                        <img src={gmat} alt="TOEFL Illustration Backdrop" height="600px" />
                        <div className="container-fluid image-content">
                            <h1 className="fw-bolder p-3">GRADUATE MANAGEMENT ADMISSION TEST</h1>
                            <h4>(GMAT)</h4>
                        </div>
                    </div>

                    {/* Basic GMAT information */}

                    <h2>About GMAT</h2>
                    <p>{about}</p>

                    <h2>GMAT Motive</h2>
                    <ul>
                        {gmatMotive.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h2>Examination Fees</h2>
                    <p>{examFee}</p>

                    <h2>Preparation Tips</h2>
                    <ul>
                        {prepTips.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>


                    {/* GMAT exam pattern information */}

                    <h3>EXAM PATTERN INFORMATION FOR GMAT EXAMINATION</h3>
                    
                    <h4>GMAT Exam Pattern</h4>
                    <ul>
                        {examPattern.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h2>Section Wise Details of GMAT - </h2>
                    <ul>
                        {gmatSectionDetail.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h2>GMAT Analytical Writing Assesment</h2>
                    <h4>Assesment Details</h4>
                    <ul>
                        {gmatAnalytical.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>
                    <h4>GMAT Analytical Writing Assesment Scoring</h4>
                    <ul>
                        {gmatAWAScore.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h2>GMAT Integrated Reasoning</h2>
                    <h4>Assesment Details</h4>
                    <ul>
                        {gmatIntegrated.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>
                    <h4>GMAT Integrated Reasoning Scoring</h4>
                    <ul>
                        {gmatIRScore.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h2>GMAT Quantative Reasoning</h2>
                    <h4>Assesment Details</h4>
                    <ul>
                        {gmatQuantitative.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>
                    <h4>GMAT Quantative Reasoning Scoring</h4>
                    <ul>
                        {gmatQuantScore.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h2>GMAT Verbal Reasoning</h2>
                    <h4>Assesment Details</h4>
                    <ul>
                        {gmatVerbal.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>
                    <h4>GMAT Verbal Reasoning Scoring</h4>
                    <ul>
                        {gmatVerbalScore.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    {/* GMAT registration process information */}

                    <h2>GMAT Registration Details</h2>

                    <h4>Information you will need for Registration Process</h4>
                    <p>To Register for GMAT you need - </p>
                    <ul>
                        {gmatRegInfo.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4>GMAT Registration via Phone</h4>
                    <ul>
                        {gmatPhoneReg.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4>GMAT Registration via Mail process</h4>
                    <ul>
                        {gmatMailReg.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4>Offline Payment Mode process:</h4>
                    <ul>
                        {gmatOfflinePay.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4>GMAT Online Registration process</h4>
                    <ul>
                        {gmatOnlineReg.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4>Online Payment Mode process</h4>
                    <ul>
                        {gmatOnlinePay.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    {/* GMAT results and cutoff information */}

                    <h2>Cutoff Information</h2>

                    <h4>Factors Determining GMAT cutoff for an Institution</h4>
                    <ul>
                        {gmatFactorsForCutoff.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4>General cutoffs</h4>
                    <p>{gmatGeneralCutoff}</p>

                    <h4>GMAT cutoffs for the year 2021</h4>
                    <ul>
                        {gmatRecentCutoff.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4>GMAT Cutoff For Top B-Schools in India</h4>
                    <ul>
                        {gmatCutoffIndia.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    );
}