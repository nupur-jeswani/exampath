import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./examinations.css";
import gre from "./images/gre-img.png";
import { Offcanvas } from "react-bootstrap";
import { Button } from 'react-bootstrap';

export const Gre = () => {

    // Core GRE States
    const [about, setAbout] = useState("");
    const [greMotive, setGreMotive] = useState([]);
    const [registration, setRegistration] = useState([]);
    const [examFee, setExamFee] = useState([]);
    const [cutoff, setCutoff] = useState([]);
    const [scoreCard, setScoreCard] = useState("");
    const [prepTips, setPrepTips] = useState([]);
    const [papers, setPapers] = useState([]);

    // Subsidary GRE States
    const [intro, setIntro] = useState("");
    const [greAnalytical, setGreAnalytical] = useState([]);
    const [greQuantitative, setGreQuantitative] = useState([]);
    const [greVerbal, setGreVerbal] = useState([]);

    // getting data and saving it in the state
    useEffect(() => {
        const getDetails = async () => {
            const docRef = doc(db, "examinations", "GRE");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let data = docSnap.data();
                setGreMotive(data.GREmotive);
                setAbout(data.about);
                setCutoff(data.cutoff);
                setExamFee(data.examFee);
                setPrepTips(data.preparationTips);
                setRegistration(data.registration);
                setScoreCard(data.scoreCard);
                setPapers(data.papers);
            } else {
                console.log("No such document!");
            }
        }

        getDetails();
    }, []);

    useEffect(() => {
        const getExamDetails = async () => {
            const examPatternRef = doc(db, "examinations", "GRE", "Exam Pattern Information", "Information")
            const examPatternSnap = await getDoc(examPatternRef);

            if (examPatternSnap.exists()) {
                console.log("Document data:", examPatternSnap.data());
                let data = examPatternSnap.data();
                setIntro(data.introduction);
                setGreAnalytical(data["GRE Analytical Writing"]);
                setGreQuantitative(data["GRE Quantitative Reasoning"]);
                setGreVerbal(data["GRE Verbal Reasoning"]);
            } else {
                console.log("No such subcollection found!");
            }
        }

        getExamDetails();
    }, []);

    function Contents() {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
                <Button style={{"backgroundColor":"rgb(121, 198, 201)", "color":"black"}} onClick={handleShow} className="fw-bolder pt-2 ps-4 pe-4 position-fixed bottom-0 end-0">
                    TABLE OF CONTENTS
                </Button>

                <Offcanvas show={show} onHide={handleClose} className="bg-dark">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title style={{"color":"burlywood", "font-weight": "600"}}>Table of Contents</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="index">
                            <p>Introduction To GRE - </p>
                            <a href="#about">About GRE Examination</a>
                            <a href="#motive">Why should one choose to give GRE?</a>

                            <p>GRE Registration -</p>
                            <a href="#registration">Registration Details</a>
                            <a href="#fees">Examination Fees</a>

                            <p>Core Details of GRE Examination -</p>
                            <a href="#section-intro">Introduction to GRE Examination</a>
                            <ul>
                                <li><a href="#section-1">GRE Analytical Writing</a></li>
                                <li><a href="#section-2">GRE Quantitative Writing</a></li>
                                <li><a href="#section-3">GRE Verbal Writing</a></li>
                            </ul>
                            <a href="#cutoff">GRE CutOffs</a>
                            <a href="#scorecard">GRE Score Card</a>
                            <a href="#preptips">Preparation Tips for GRE</a>
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
                        <img src={gre} alt="GRE Illustration Backdrop" />
                        <div className="container-fluid image-content">
                            <h1 className="fw-bolder">GRADUATE RECORD EXAMINATION</h1>
                            <h4>(GRE)</h4>
                        </div>
                    </div>
                    <h3 id="about" className="heading">ABOUT THE EXAMINATION</h3>
                    <p>{about}</p>

                    <h3 id="motive" className="heading">WHY SHOULD ONE CONSIDER GIVING GRE?</h3>
                    <p>{greMotive}</p>
                    <ul>
                        {greMotive.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="registration" className="heading">REGISTRATION INFORMATION FOR GRE</h3>
                    <ul>
                        {registration.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="fees" className="heading">EXAMINATION FEES</h3>
                    <ul>
                        {examFee.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    {/* Exam Details */}

                    <h3 id="section-intro" className="heading">SECTIONS IN GRE EXAMINATION </h3>
                    <p>{intro}</p>

                    <h4 id="section-1" className="heading">GRE ANALYTICAL WRITING</h4>
                    <ul>
                        {greAnalytical.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="section-2" className="heading">GRE QUANTITATIVE REASONING</h4>
                    <ul>
                        {greQuantitative.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="section-3" className="heading">GRE VERBAL REASONING</h4>
                    <ul>
                        {greVerbal.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="cutoff" className="heading">CUT-OFF INFORMATION</h3>
                    <ul>
                        {cutoff.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="scorecard" className="heading">WHAT WILL YOUR SCORE CARD CONTAIN?</h3>
                    <p>{scoreCard}</p>

                    <h3 id="preptips" className="heading">PREPARATION TIPS FOR GRE EXAMINATION</h3>
                    <ul>
                        {prepTips.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="preptips" className="heading">REFERENCE PAPERS FOR GRE EXAMINATION</h3>
                    <ul>
                        {papers.map((item, id) => (
                            <li key={id}><a rel="noreferrer" target="_blank" href={item}>{item}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}