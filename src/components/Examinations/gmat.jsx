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
    const [papers, setPapers] = useState([]);

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
                setPapers(data.papers);
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
                            <p>Introduction To GMAT - </p>
                            <a href="#about">About GMAT Examination</a>
                            <a href="#motive">Why should one choose to give GMAT?</a>
                            <a href="#examFees">GMAT examination fees</a>
                            <a href="#preptips">Preparation Tips for GMAT examination</a>

                            <p>Core Details of GMAT Examination -</p>
                            <a href="#examPattern">Introduction to GMAT Examination</a>
                            <a href="#sectionalDetails">GMAT Section Wise Details</a>
                            <ul>
                                <li><a href="#analyticalSection">GMAT Analytical Section</a></li>
                                <li><a href="#writingSection">GMAT Writing Section</a></li>
                                <li><a href="#integratedReasoningSection">GMAT Integrated Reasoning Section</a></li>
                                <li><a href="#integratedReasoningSectionScoring">Scoring of Integrated Reasoning Section</a></li>
                                <li><a href="#quantSection">GMAT Quantitative Section</a></li>
                                <li><a href="#quantScoring">Scoring of Quantitative Section</a></li>
                                <li><a href="#verbalSection">GMAT Verbal Section</a></li>
                                <li><a href="#verbalScoring">Scoring of Verbal Section</a></li>
                            </ul>

                            <p>GMAT Registration -</p>
                            <a href="#regInfo">Registration Details</a>
                            <a href="#regPhone">Telephonic Registration Details</a>
                            <a href="#regMail">Registration through mail</a>
                            <a href="#offlinePay">Offline Payment mode</a>
                            <a href="#onlineReg">Online Registration</a>
                            <a href="#onlinePay">Online Payment mode</a>

                            <p>Cutoff information -</p>
                            <a href="#determingCutoff">Determing Cutoffs</a>
                            <a href="#generalcutoffs">General Cutoffs</a>
                            <a href="#cutoffs">Cutoffs for 2021</a>
                            <a href="#topB">Cutoff for top colleges</a>

                            <p>References for GRE Examination</p>
                            <a href="#papers">Reference Papers for GRE</a>
                            <a href="#books">Reference Papers for GMAT</a>
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

                    <h3 id="about" className="heading text-uppercase">About GMAT</h3>
                    <p>{about}</p>

                    <h3 id="motive" className="heading text-uppercase">GMAT Motive</h3>
                    <ul>
                        {gmatMotive.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="examFees" className="heading text-uppercase">Examination Fees</h3>
                    <p>{examFee}</p>

                    <h3 id="preptips" className="heading text-uppercase">Preparation Tips</h3>
                    <ul>
                        {prepTips.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>


                    {/* GMAT exam pattern information */}

                    <h3 className="heading text-uppercase">EXAM PATTERN INFORMATION FOR GMAT EXAMINATION</h3>
                    
                    <h4 id="examPattern" className="heading text-uppercase">GMAT Exam Pattern</h4>
                    <ul>
                        {examPattern.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="sectionalDetails" className="heading text-uppercase">Section Wise Details of GMAT - </h3>
                    <ul>
                        {gmatSectionDetail.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="analyticalSection" className="heading text-uppercase">GMAT Analytical Writing Assesment details</h4>
                    <ul>
                        {gmatAnalytical.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>
                    <h4 id="writingSection" className="heading text-uppercase">GMAT Analytical Writing Assesment Scoring</h4>
                    <ul>
                        {gmatAWAScore.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="integratedReasoningSection" className="heading text-uppercase">GMAT Integrated Reasoning Assesment Details</h4>
                    <ul>
                        {gmatIntegrated.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>
                    <h5 id="integratedReasoningSectionScoring" className="heading text-uppercase">GMAT Integrated Reasoning Scoring</h5>
                    <ul>
                        {gmatIRScore.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="quantSection" className="heading text-uppercase">GMAT Quantative Reasoning Assesment Details</h3>
                    <ul>
                        {gmatQuantitative.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>
                    <h4 id="quantScoring" className="heading text-uppercase">GMAT Quantative Reasoning Scoring</h4>
                    <ul>
                        {gmatQuantScore.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="verbalSection" className="heading text-uppercase">GMAT Verbal Reasoning Assesment Details</h3>
                    <ul>
                        {gmatVerbal.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>
                    <h4 id="verbalScoring" className="heading text-uppercase">GMAT Verbal Reasoning Scoring</h4>
                    <ul>
                        {gmatVerbalScore.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    {/* GMAT registration process information */}

                    <h3 className="heading text-uppercase">GMAT Registration Details</h3>

                    <h4 id="regInfo" className="heading text-uppercase">Information you will need for Registration Process</h4>
                    <p>To Register for GMAT you need - </p>
                    <ul>
                        {gmatRegInfo.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="regPhone" className="heading text-uppercase">GMAT Registration via Phone</h4>
                    <ul>
                        {gmatPhoneReg.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="regMail" className="heading text-uppercase">GMAT Registration via Mail process</h4>
                    <ul>
                        {gmatMailReg.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="offlinePay" className="heading text-uppercase">Offline Payment Mode process:</h4>
                    <ul>
                        {gmatOfflinePay.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="onlineReg" className="heading text-uppercase">GMAT Online Registration process</h4>
                    <ul>
                        {gmatOnlineReg.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="onlinePay" className="heading text-uppercase">Online Payment Mode process</h4>
                    <ul>
                        {gmatOnlinePay.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    {/* GMAT results and cutoff information */}

                    <h3 className="heading text-uppercase">Cutoff Information</h3>

                    <h4 id="determingCutoff" className="heading text-uppercase">Factors Determining GMAT cutoff for an Institution</h4>
                    <ul>
                        {gmatFactorsForCutoff.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="generalcutoffs" className="heading text-uppercase">General cutoffs</h4>
                    <p>{gmatGeneralCutoff}</p>

                    <h4 id="cutoffs" className="heading text-uppercase">GMAT cutoffs for the year 2021</h4>
                    <ul>
                        {gmatRecentCutoff.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="topB" className="heading text-uppercase">GMAT Cutoff For Top B-Schools in India</h4>
                    <ul>
                        {gmatCutoffIndia.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>
                    <h3 id="papers" className="heading">REFERENCE PAPERS FOR GMAT EXAMINATION</h3>
                    <ul>
                        {papers.map((item, id) => (
                            <li key={id}><a rel="noreferrer" target="_blank" href={item}>{item}</a></li>
                        ))}
                    </ul>
                    <h3 id="books" className="heading">REFERENCE BOOKS FOR GMAT EXAMINATION</h3>
                    <ul>
                        <li><a rel="noreferrer" target="_blank" href="https://www.amazon.in/GMAT-Official-Guide-2022-Bundle/dp/8126547367/ref=asc_df_8126547367/?tag=googleshopdes-21&linkCode=df0&hvadid=396987006477&hvpos=&hvnetw=g&hvrand=12313744227657356810&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9040246&hvtargid=pla-1364268758875&psc=1&ext_vrnc=hi">GMAT Official Guide 2022 Bundle: Books + Online Question Bank Paperback – 1</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://www.amazon.in/Barrons-GMAT-Online-Tests-Bobby/dp/1438007981/ref=asc_df_1438007981/?tag=googleshopdes-21&linkCode=df0&hvadid=396986143623&hvpos=&hvnetw=g&hvrand=12313744227657356810&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9040246&hvtargid=pla-366371788531&psc=1&ext_vrnc=hi">GMAT with Online Test (Barron's Test Prep) Paperback – 1 January 2017</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://www.snapdeal.com/product/mcgrawhill-education-gmat/622631468752?supc=SDL449690831&utm_source=earth&utm_medium=622631468752_375_364_1244&vendorCode=S94d7c&isSellerPage=true&fv=true&utm_source=earth_pla&utm_campaign=snapdeal_pla_account_pla_all_products_roas_1d_ftu&utm_medium=&utm_term=498562763992_118648795118_{bidstrategy}&gclid=Cj0KCQiA-K2MBhC-ARIsAMtLKRs0-wRU2OfiwXF5J5mWvEyQXggJ4RH-gKkQ2S_Cz3t5cpzUh7W81NEaAoTbEALw_wcB">McGraw-Hill Education GMAT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}