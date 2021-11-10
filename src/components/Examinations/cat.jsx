import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./examinations.css";
import { Offcanvas } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import cat from "./images/cat-img.png";

export const Cat = () => {

    // Core CAT States
    const [about, setAbout] = useState("");
    const [catHighlights, setCatHighlights] = useState([]);
    const [prepTips, setPrepTips] = useState([]);

    // Subsidary CAT States

    // CAT exam pattern information states
    const [examPattern, setExamPattern] = useState([]);
    const [catVerbal, setCatVerbal] = useState([]);
    const [catLogical, setCatLogical] = useState([]);
    const [catQuantitative, setCatQuantitative] = useState([]);
    const [catSyllabus, setCatSyllabus] = useState([]);

    // CAT registration process states
    const [catAppForm, setCatAppForm] = useState([]);
    const [catAppPay, setCatAppPay] = useState([]);
    const [catExamCenter, setCatExamCenter] = useState([]);
    const [catReqDocs, setCatReqDocs] = useState([]);
    const [catImpPoints, setCatImpPoints] = useState([]);

    // CAT result and cutoff states
    const [intro, setIntro] = useState("");
    const [catScoreCard, setCatScoreCard] = useState([]);
    const [catPercentileCal, setCatPercentileCal] = useState([]);

    // getting data and saving it in the state
    useEffect(() => {
        const getDetails = async () => {
            const docRef = doc(db, "examinations", "CAT");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let data = docSnap.data();
                setAbout(data.about);
                setCatHighlights(data["CAT highlights "]);
                setPrepTips(data.preparationTips);

            } else {
                console.log("No such document!");
            }
        }

        getDetails();
    }, []);

    useEffect(() => {
        const getDetails = async () => {
            const registrationRef = doc(db, "examinations", "CAT", "Registration", "Process")
            const registrationSnap = await getDoc(registrationRef);

            if (registrationSnap.exists()) {
                let data = registrationSnap.data();
                setCatAppForm(data["Filling the CAT Application form"]);
                setCatAppPay(data["Payment of CAT Application Fee"]);
                setCatExamCenter(data["how to Select CAT Exam Center"]);
                setCatReqDocs(data["Documents Required for CAT Registration 2021:"]);
                setCatImpPoints(data["important Points to Remember while registration"]);
            } else {
                console.log("No such document!");
            }
        }

        getDetails();
    }, []);

    useEffect(() => {
        const getDetails = async () => {
            const examPatternRef = doc(db, "examinations", "CAT", "Exam pattern and syllabus information", "Pattern information");
            const examPatternSnap = await getDoc(examPatternRef);

            if (examPatternSnap.exists()) {
                let data = examPatternSnap.data();
                setExamPattern(data["CAT EXAM PATTERN"]);
                setCatVerbal(data["CAT Verbal Ability and Reading Comprehension"]);
                setCatLogical(data["CAT data interpretation and Logical Reasoning"]);
                setCatQuantitative(data["CAT quantitative Aptitude"]);
            } else {
                console.log("No such document!");
            }
        }

        getDetails();
    }, []);

    useEffect(() => {
        const getDetails = async () => {
            const examSyllabusRef = doc(db, "examinations", "CAT", "Exam pattern and syllabus information", "Syllabus ");
            const examSyllabusSnap = await getDoc(examSyllabusRef);

            if (examSyllabusSnap.exists()) {
                let data = examSyllabusSnap.data();
                setCatSyllabus(data["Exam Syllabus"]);
            } else {
                console.log("No such document!");
            }
        }

        getDetails();
    }, []);

    useEffect(() => {
        const getDetails = async () => {
            const resultRef = doc(db, "examinations", "CAT", "Results and CutOffs ", "2UvCQeinxvtn9w8I62cT");
            const resultSnap = await getDoc(resultRef);

            if (resultSnap.exists()) {
                let data = resultSnap.data();
                setIntro(data.Introduction);
                setCatScoreCard(data["Details Mentioned on CAT Scorecard "]);
                setCatPercentileCal(data["CAT percentile calculation"]);

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
            <div className="container">
                <div className="about-exam">
                    <div className="backdrop">
                        <img src={cat} alt="CAT Illustration Backdrop" height="600px" />
                        <div className="container-fluid image-content">
                            <h1 className="fw-bolder">COMMON ADMISSION TEST</h1>
                            <h4>(CAT)</h4>
                        </div>
                    </div>
                    {/* Basic CAT information */}

                    <h2>About CAT</h2>
                    <p>{about}</p>

                    <h2>Important Points About CAT</h2>
                    <h4>Official Website for CAT - <a target="_blank" href="https://iimcat.ac.in/per/g01/pub/756/ASM/WebPortal/1/index.html?756@@1@@1">CAT</a></h4>
                    <ul>
                        {catHighlights.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h2>Preparation Tips</h2>
                    <ul>
                        {prepTips.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h2>Registration Process for CAT Exam</h2>

                    <h4>Filling the Registration Form of CAT Examination</h4>
                    <ul>
                        {catAppForm.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4>Payment Details for CAT Examination</h4>
                    <ul>
                        {catAppPay.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4>Selecting an Exam Center for CAT</h4>
                    <ul>
                        {catExamCenter.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4>Documents Required for CAT Registration</h4>
                    <ul>
                        {catReqDocs.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4>Important Details to remember while Registering for CAT </h4>
                    <ul>
                        {catImpPoints.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h2>CAT Exam Pattern Details -  </h2>

                    <h4>CAT Exam Pattern</h4>
                    <ul>
                        {examPattern.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5>CAT Exam Syllabus - </h5>
                    <ul>
                        {catSyllabus.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5>CAT Verbal Ability and Reading Comprehension - </h5>
                    <ul>
                        {catVerbal.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5>CAT Data Interpretation and Logical Reasoning - </h5>
                    <ul>
                        {catLogical.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5>CAT quantitative Aptitude - </h5>
                    <ul>
                        {catQuantitative.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h2>Details about CAT ScoreCard and Percentile Calculation</h2>

                    <h4>About CAT's Score Card </h4>
                    <p>{intro}</p>

                    <h4>Details mentioned on ScoreCard</h4>
                    <ul>
                        {catScoreCard.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4>Calculating Percentile</h4>
                    <ul>
                        {catPercentileCal.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    );
}