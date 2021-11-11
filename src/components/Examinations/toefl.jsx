import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./examinations.css";
import { Offcanvas } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import toefl from "./images/toefl-img.png";

export const Toefl = () => {

    // Core TOEFL States
    const [about, setAbout] = useState("");
    const [toeflMotive, setToeflMotive] = useState([]);
    const [papers, setPapers] = useState([]);

    // Subsidary TOEFL States

    // TOEFL exam pattern and syllabus information states
    const [toeflExamPattern, setToeflExamPattern] = useState([]);
    const [toeflSyllabusIntro, setToeflSyllabusIntro] = useState([]);
    const [toeflReading, setToeflReading] = useState([]);
    const [toeflSpeaking, setToeflSpeaking] = useState([]);
    const [toeflWriting, setToeflWriting] = useState([]);
    const [toeflListening, setToeflListening] = useState([]);

    // TOEFL registration process states
    const [toeflRegDetails, setToeflRegDetails] = useState("");
    const [toeflExamFee, setToeflExamFee] = useState("");
    const [toeflEligibilityTest, setToeflEligibilityTest] = useState([]);
    const [toeflReqDocs, setToeflReqDocs] = useState([]);
    const [toeflCancellation, setToeflCancellation] = useState([]);

    // TOEFL results and cutoff states
    const [toeflScore, setToeflScore] = useState([]);
    const [toeflScoreRange, setToeflScoreRange] = useState([]);
    const [toeflScoreReporting, setToeflScoreReporting] = useState("");
    const [toeflRLCal, setToeflRLCal] = useState([]);
    const [toeflSpeakingCal, setToeflSpeakingCal] = useState([]);
    const [toeflWritingCal, setToeflWritingCal] = useState([]);
    const [toeflPercentile, setToeflPercentile] = useState([]);
    const [toeflReceiveResult, setToeflReceiveResult] = useState("");
    const [toeflIeltsCompare, setToeflIeltsCompare] = useState([]);

    // getting data and saving it in the state
    useEffect(() => {
        const getDetails = async () => {
            const docRef = doc(db, "examinations", "TOEFL");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let data = docSnap.data();
                setAbout(data.about);
                setToeflMotive(data.TOEFLmotive);
                setPapers(data.papers);
            } else {
                console.log("No such document!");
            }
        }

        getDetails();
    }, []);

    useEffect(() => {
        const getDetails = async () => {
            const registrationRef = doc(db, "examinations", "TOEFL", "Registration", "Process")
            const registrationSnap = await getDoc(registrationRef);

            if (registrationSnap.exists()) {
                let data = registrationSnap.data();
                setToeflRegDetails(data["Details of registration"]);
                setToeflExamFee(data["TOEFL Registration Fee and Payment Mode"]);
                setToeflEligibilityTest(data["TOEFL Eligibility 2021"]);
                setToeflReqDocs(data["Documents Required for TOEFL Registration"]);
                setToeflCancellation(data["TOEFL Registration form Cancellation or Rescheduling"]);
            } else {
                console.log("No such document!");
            }
        }

        getDetails();
    }, []);

    useEffect(() => {
        const getDetails = async () => {
            const examSyllabusRef = doc(db, "examinations", "TOEFL", "Exam pattern and syllabus Information", "Syllabus ");
            const examSyllabusSnap = await getDoc(examSyllabusRef);

            if (examSyllabusSnap.exists()) {
                let data = examSyllabusSnap.data();
                setToeflSyllabusIntro(data["TOEFL SYLLABUS INTRODUCTION"]);
                setToeflReading(data["TOEFL Syllabus: Reading Comprehension Section"]);
                setToeflSpeaking(data["TOEFL Syllabus: Speaking Section"]);
                setToeflWriting(data["TOEFL Syllabus: Writing Section"]);
                setToeflListening(data["TOEFL Syllabus: listening Section"]);
            } else {
                console.log("No such document!");
            }
        }

        getDetails();
    }, []);

    useEffect(() => {
        const getDetails = async () => {
            const examPatternRef = doc(db, "examinations", "TOEFL", "Exam pattern and syllabus Information", "Exam Pattern");
            const examPatternSnap = await getDoc(examPatternRef);

            if (examPatternSnap.exists()) {
                let data = examPatternSnap.data();
                setToeflExamPattern(data.ExamPattern);
            } else {
                console.log("No such document!");
            }
        }

        getDetails();
    }, []);

    useEffect(() => {
        const getDetails = async () => {
            const resultCutoffRef = doc(db, "examinations", "TOEFL", "Result and CutOffs ", "zE6mHf6IgxlgUaFGmohO")
            const resultCutoffSnap = await getDoc(resultCutoffRef);

            if (resultCutoffSnap.exists()) {
                let data = resultCutoffSnap.data();
                setToeflScore(data["Calculation Of TOEFL score"]);
                setToeflScoreRange(data["TOEFL Score Range"]);
                setToeflScoreReporting(data["TOEFL score Reporting "]);
                setToeflRLCal(data["TOEFL Reading and Listening Sections:"]);
                setToeflSpeakingCal(data["TOEFL Speaking Section:"]);
                setToeflWritingCal(data["TOEFL Writing Section:"]);
                setToeflPercentile(data["TOEFL score Conversion to Percentile "]);
                setToeflReceiveResult(data["how to Receive TOEFL Result?"]);
                setToeflIeltsCompare(data["comparing TOEFL and IELTS Score"]);
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

                            <p>References for TOEFL Examination</p>
                            <a href="#papers">Reference Papers for TOEFL</a>
                            <a href="#books">Reference Papers for TOEFL</a>
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
                        <img src={toefl} alt="TOEFL Illustration Backdrop" height="600px" />
                        <div className="container-fluid image-content">
                            <h1 className="fw-bolder p-3">TEST OF ENGLISH AS A FOREGIN LANGUAGE</h1>
                            <h4>(TOEFL)</h4>
                        </div>
                    </div>

                    {/* Basic TOEFL information */}
                    <h3 id="about" className="heading">ABOUT THE EXAMINATION</h3>
                    <p>{about}</p>

                    <h3 id="motive" className="heading">WHY SHOULD ONE CONSIDER GIVING TOEFL?</h3>
                    <ul>
                        {toeflMotive.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 className="heading">REGISTRATION INFORMATION FOR TOEFL</h3>

                    <h4 id="registrationIntro" className="heading">TOEFL REGISTRATION DETAILS </h4>
                    <p>{toeflRegDetails}</p>

                    <h4 id="eligibilityTest" className="heading">TOEFL ELIGIBILITY TEST</h4>
                    <ul>
                        {toeflEligibilityTest.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="docs" className="heading">DOCUMENTS NECESSARY FOR TOEFL REGISTRATION</h4>
                    <ul>
                        {toeflReqDocs.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="fee-and-pay" className="heading">TOEFL REGISTRATION FEE AND PAYMENT MODE</h4>
                    <p>{toeflExamFee}</p>

                    <h4 id="formCancellation" className="heading">TOEFL REGISTRATION FORM CANCELLATION / RESCHEDULING</h4>
                    <ul>
                        {toeflCancellation.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 className="heading">EXAM PATTERN INFORMATION FOR TOEFL EXAMINATION</h3>

                    <h4 id="examPatternIntro" className="heading">TOEFL EXAM PATTERN</h4>
                    <p>{toeflExamPattern}</p>

                    <h4 id="examSyllabus" className="heading">TOEFL EXAMINATION SYLLABUS DETAILS</h4>
                    <p>{toeflSyllabusIntro}</p>

                    <h5 id="readingSection" className="heading">TOEFL READING COMPREHENSION SECTION -</h5>
                    <ul>
                        {toeflReading.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5 id="speakingSection" className="heading">TOEFL SPEAKING SECTION - </h5>
                    <ul>
                        <li>{toeflSpeaking[0]}</li>
                        <li>{toeflSpeaking[1]}</li>
                        <li>{toeflSpeaking[2]}</li>
                        <ol>
                            <li>{toeflSpeaking[3]}</li>
                            <li>{toeflSpeaking[4]}</li>
                            <li>{toeflSpeaking[5]}</li>
                        </ol>
                        <li>{toeflSpeaking[6]}</li>
                    </ul>

                    <h5 id="writingSection" className="heading">TOEFL WRITING SECTION - </h5>
                    <ul>
                        <li>{toeflWriting[0]}</li>
                        <li>{toeflWriting[1]}</li>
                        <li>{toeflWriting[2]}</li>
                        <ol>
                            <li>{toeflWriting[3]}</li>
                            <li>{toeflWriting[4]}</li>
                            <li>{toeflWriting[5]}</li>
                        </ol>
                        <li>{toeflWriting[6]}</li>
                    </ul>

                    <h5 id="listeningSection" className="heading">TOEFL LISTENING SECTION - </h5>
                    <ul>
                        <li>{toeflListening[0]}</li>
                        <li>{toeflListening[1]}</li>
                        <ol>
                            <li>{toeflListening[2]}</li>
                            <li>{toeflListening[3]}</li>
                            <li>{toeflListening[4]}</li>
                        </ol>
                        <li>{toeflListening[5]}</li>
                    </ul>

                    <h3 className="heading">RESULTS AND SCORING INFORMATION FOR TOEFL INFORMTATION</h3>

                    <h4 id="calScore" className="heading">CALCULATION OF TOEFL SCORES</h4>
                    <ul>
                        {toeflScore.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="scoreRange" className="heading">TOEFL SCORE RANGE</h4>
                    <ul>
                        {toeflScoreRange.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="scoringDetails" className="heading">SCORING INFORMATION FOR VARIOUS SECTIONS OF TOEFL EXAMINATION </h4>

                    <h5 id="readingListeningScore" className="heading">TOEFL READING AND LISTENING SECTION SCORING PATTERN - </h5>
                    <ul>
                        {toeflRLCal.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5 id="speakingScore" className="heading">TOEFL SPEAKING SECTION SCORING PATTERN - </h5>
                    <ul>
                        {toeflSpeakingCal.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5 id="writingScore" className="heading">TOEFL WRITING SECTION SCORING PATTERN - </h5>
                    <ul>
                        {toeflWritingCal.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="getResult" className="heading">HOW TO GET YOUR TOEFL RESULT?</h4>
                    <p>{toeflReceiveResult}</p>

                    <h4 id="reportScore" className="heading">HOW TO REPORT YOUR TOEFL SCORE?</h4>
                    <p>{toeflScoreReporting}</p>

                    <h4 id="convertScore" className="heading">HOW TO CONVERT YOUR TOEFL SCORES INTO PERCENTILE?</h4>
                    <ul>
                        {toeflPercentile.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="difference" className="heading">DIFFERENCE BETWEEN TOEFL AND IELTS AND WHICH EXAM SHOULD ONE GIVE? - </h4>
                    <ul>
                        {toeflIeltsCompare.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="papers" className="heading">REFERENCE PAPERS FOR TOEFL EXAMINATION</h3>
                    <ul>
                        {papers.map((item, id) => (
                            <li key={id}><a rel="noreferrer" target="_blank" href={item}>{item}</a></li>
                        ))}
                    </ul>

                    <h3 id="books" className="heading">REFERENCE BOOKS FOR TOEFL EXAMINATION</h3>
                    <ul>
                        <li><a rel="noreferrer" target="_blank" href="https://www.amazon.in/Official-Guide-GRE-General-Test/dp/9352607376/ref=asc_df_9352607376/?tag=googleshopdes-21&linkCode=df0&hvadid=396986321649&hvpos=&hvnetw=g&hvrand=10802206632015260020&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9040246&hvtargid=pla-406475572215&psc=1&ext_vrnc=hi">The Official Guide to the GRE General Test Paperback  </a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://www.amazon.in/Official-Verbal-Reasoning-Practice-Questions/dp/935260735X/ref=asc_df_935260735X/?tag=googleshopdes-21&linkCode=df0&hvadid=396986064216&hvpos=&hvnetw=g&hvrand=10802206632015260020&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9040246&hvtargid=pla-406475572055&psc=1&ext_vrnc=hi">Official GRE Verbal Reasoning Practice Questions Paperback   </a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://www.amazon.in/Princeton-Review-GRE-Prep-2022/dp/0525570489/ref=asc_df_0525570489/?tag=googleshopdes-21&linkCode=df0&hvadid=397006816756&hvpos=&hvnetw=g&hvrand=10802206632015260020&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9040246&hvtargid=pla-1259672230788&psc=1&ext_vrnc=hi">Princeton Review GRE Prep, 2022: 5 Practice Tests + Review & Techniques + Online Features (2022) (Graduate School Test Preparation) Paperback   </a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://www.amazon.in/Barron%60s-Essential-Words-Philip-Geer/dp/9387477010/ref=asc_df_9387477010/?tag=googleshopdes-21&linkCode=df0&hvadid=426508239022&hvpos=&hvnetw=g&hvrand=10802206632015260020&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9040246&hvtargid=pla-812133097569&psc=1&ext_vrnc=hi">Barron`S Essential Words For The Gre Paperback   </a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://www.bookishsanta.com/products/5-lb-book-of-gre-practice-problems-1-800-practice-problems-in-book-and-online?variant=37996211830979&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_campaign=gs-2021-03-01&utm_source=google&utm_medium=smart_campaign&gclid=Cj0KCQiA-K2MBhC-ARIsAMtLKRsitdbIb0UwsutiWyfutIY3wo3yYR13syIfD2FFDzqtg5uXZrJtkY8aArlVEALw_wcB">Book of GRE Practice Problems: 1,800+ Practice Problems in Book  </a></li>
                    </ul>
                </div>
            </div>


        </div>
    );
}