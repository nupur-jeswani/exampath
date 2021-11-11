import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./examinations.css";
import { Offcanvas } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import ielts from "./images/ielts-img.jpg";

export const Ielts = () => {

    // Core IELTS States
    const [about, setAbout] = useState("");
    const [ieltscutoffs, setIeltscutoffs] = useState("");
    const [prepTips, setPrepTips] = useState([]);
    const [ieltsResult, setIeltsResult] = useState([]);
    const [papers, setPapers] = useState([]);

    // Subsidary IELTS States

    // IELTS exam pattern information states
    const [ieltsIntro, setIeltsIntro] = useState([]);
    const [ieltsSyllabus, setIeltsSyllabusl] = useState([]);
    const [ieltsSpeaking, setIeltsSpeaking] = useState([]);
    const [ieltsReading, setIeltsReading] = useState([]);
    const [ieltsListening, setIeltsListening] = useState([]);
    const [ieltsWriting, setIeltsWriting] = useState([]);

    // IELTS registration process states
    const [ieltsExamFee, setIeltsExamFee] = useState("");
    const [ieltsRegDetails, setIeltsRegDetails] = useState([]);
    const [ieltsRegIndicator, setIeltsRegIndicator] = useState([]);
    const [ieltsReqDocs, setIeltsReqDocs] = useState([]);
    const [ieltsOnlineReg, setIeltsOnlineReg] = useState([]);
    const [ieltsPayMode, setIeltsPayMode] = useState([]);

    // getting data and saving it in the state
    useEffect(() => {
        const getDetails = async () => {
            const docRef = doc(db, "examinations", "IELTS");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let data = docSnap.data();
                setAbout(data.about);
                setIeltscutoffs(data["cutOffs "]);
                setPrepTips(data.preparationTips);
                setIeltsResult(data.results);
                setPapers(data.papers);

            } else {
                console.log("No such document!");
            }
        }

        getDetails();
    }, []);

    useEffect(() => {
        const getDetails = async () => {
            const registrationRef = doc(db, "examinations", "IELTS", "Registration", "Process")
            const registrationSnap = await getDoc(registrationRef);

            if (registrationSnap.exists()) {
                let data = registrationSnap.data();
                setIeltsExamFee(data["IELTS Exam Fee 2021"]);
                setIeltsRegDetails(data["IELTS Registration 2021"]);
                setIeltsRegIndicator(data["IELTS indicator Registration"]);
                setIeltsReqDocs(data["IELTS documents Required for Registration"]);
                setIeltsOnlineReg(data["IELTS Online Registration"]);
                setIeltsPayMode(data["mode of Payment of IELTS Exam Fee"]);
            } else {
                console.log("No such document!");
            }
        }

        getDetails();
    }, []);

    useEffect(() => {
        const getDetails = async () => {
            const examPatternRef = doc(db, "examinations", "IELTS", "Exam pattern and syllabus Information", "Exam pattern");
            const examPatternSnap = await getDoc(examPatternRef);

            if (examPatternSnap.exists()) {
                let data = examPatternSnap.data();
                setIeltsIntro(data.Introduction);
                setIeltsSyllabusl(data["Syllabus "]);
                setIeltsSpeaking(data["examPattern - IELTS Speaking"]);
                setIeltsReading(data["examPattern -IELTS Reading"]);
                setIeltsListening(data["examPattern -IELTS Listening"]);
                setIeltsWriting(data["examPattern -IELTS Writing"]);
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
                            <p>Introduction To IELTS - </p>
                            <a href="#about">About IELTS Examination</a>
                            <a href="#resultDetails">Result information for IELTS Examination</a>
                            <a href="#cutoffDetails">Result information for IELTS Examination</a>
                            <a href="#preptips">Preparation Tips for IELTS Examination</a>

                            <p>IELTS Registration -</p>
                            <a href="#registrationIntro">Registration Details</a>
                            <a href="#onlineReg">Online Registration</a>
                            <a href="#docs">Documents required for Registration</a>
                            <a href="#examFees">Registration Fees</a>
                            <a href="#payment">Registration Fees</a>
                            <a href="#indicator">IELTS Indicator</a>

                            <p>Core Details of IELTS Examination -</p>
                            <a href="#examPatternIntro">Introduction to IELTS Examination</a>
                            <a href="#examSyllabus">IELTS Syllabus</a>
                            <ul>
                                <li><a href="#speakingSection">IELTS Speaking Section</a></li>
                                <li><a href="#listeningSection">IELTS Listening Section</a></li>
                                <li><a href="#readingSection">IELTS Reading Section</a></li>
                                <li><a href="#writingSection">IELTS Writing Section</a></li>
                            </ul>

                            <p>References for IELTS Examination</p>
                            <a href="#papers">Reference Papers for IELTS</a>
                            <a href="#books">Reference Papers for IELTS</a>
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
                        <img src={ielts} alt="IELTS Illustration Backdrop" height="600px" />
                        <div className="container-fluid image-content">
                            <h1 className="fw-bolder">INTERNATIONAL ENGLISH LANGUAGE TESTING SYSTEM</h1>
                            <h4>(IELTS)</h4>
                        </div>
                    </div>
                    {/* Basic IELTS information */}

                    <h3 id="about" className="heading">ABOUT THE EXAMINATION</h3>
                    <p>{about}</p>

                    <h3 id="resultDetails" className="heading">RESULT INFORMATION FOR IELTS EXAMINATION</h3>
                    <ul>
                        {ieltsResult.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="cutoffDetails" className="heading">CUTOFF DETAILS OF IELTS</h3>
                    <p>{ieltscutoffs}</p>

                    <h3 id="preptips" className="heading">PREPARATION TIPS FOR IELTS EXAMINATION</h3>
                    <ul>
                        {prepTips.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3>Registration Process for IELTS Exam</h3>

                    <h4 id="registrationIntro" className="heading">REGISTRATION INFORMATION FOR IELTS EXAMINATION </h4>
                    <ul>
                        {ieltsRegDetails.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="onlineReg" className="heading">ONLINE REGISTRATION FOR IELTS EXAMINATION</h4>
                    <p>{ieltsOnlineReg[0]}</p>
                    <ul>
                        <li>
                            STEP 1 -
                            <p>{ieltsOnlineReg[1]}</p>
                        </li>
                        <li>
                            STEP 2 -
                            <ol>
                                <li>{ieltsOnlineReg[2]}</li>
                                <li>{ieltsOnlineReg[3]}</li>
                            </ol>
                        </li>
                        <li>
                            STEP 3 -
                            <p>{ieltsOnlineReg[4]}</p>
                        </li>
                        <li>
                            STEP 4 -
                            <p>{ieltsOnlineReg[5]}</p>
                        </li>
                        <li>
                            STEP 5 -
                            <p>{ieltsOnlineReg[6]}</p>
                        </li>
                    </ul>

                    <h4 id="docs" className="heading">DOCUMENTS REQUIRED FOR IELTS REGISTRATION</h4>
                    <ul>
                        {ieltsReqDocs.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="examFees" className="heading">FEES FOR IELTS EXAMINATION</h4>
                    <p>{ieltsExamFee}</p>

                    <h4 id="payment" className="heading">MODE OF PAYMENT FOR IELTS EXAMINATION</h4>
                    <ul>
                        {ieltsPayMode.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="indicator" className="heading">WHAT IS IELTS INDICATOR?</h4>
                    <ul>
                        {ieltsRegIndicator.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3>IELTS Exam Pattern Details -  </h3>

                    <h4 id="examPatternIntro" className="heading">IELTS EXAM PATTERN</h4>
                    <p>{ieltsIntro}</p>

                    <h4 id="examSyllabus" className="heading">IELTS EXAM SYLLABUS DETAILS - </h4>
                    <ul>
                        <li>{ieltsSyllabus[0]}</li>
                        <ol>
                            <li>{ieltsSyllabus[1]}</li>
                            <li>{ieltsSyllabus[2]}</li>
                        </ol>
                        <li>{ieltsSyllabus[3]}</li>
                        <li>{ieltsSyllabus[4]}</li>
                    </ul>

                    <h5 id="speakingSection" className="heading">IELTS SPEAKING SECTION - </h5>
                    <ul>
                        {ieltsSpeaking.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5 id="listeningSection" className="heading">IELTS LISTENING SECTION - </h5>
                    <ul>
                        <li>{ieltsListening[0]}</li>
                        <li>{ieltsListening[1]}</li>
                        <li>{ieltsListening[2]}</li>
                        <li>{ieltsListening[3]}</li>
                        <li>{ieltsListening[4]}</li>
                        <li>{ieltsListening[5]}</li>
                        <li>{ieltsListening[6]}</li>
                        <li>{ieltsListening[7]}</li>
                        <ol>
                            <li>{ieltsListening[8]}</li>
                            <li>{ieltsListening[9]}</li>
                            <li>{ieltsListening[10]}</li>
                            <li>{ieltsListening[11]}</li>
                            <li>{ieltsListening[12]}</li>
                            <li>{ieltsListening[13]}</li>
                        </ol>
                        <li>{ieltsListening[14]}</li>
                    </ul>


                    <h5 id="readingSection" className="heading">IELTS READING SECTION - </h5>
                    <ul>
                        <li>{ieltsReading[0]}</li>
                        <li>{ieltsReading[1]}</li>
                        <li>{ieltsReading[2]}</li>
                        <li>{ieltsReading[3]}</li>
                        <li>{ieltsReading[4]}</li>
                        <li>{ieltsReading[5]}</li>
                        <ol>
                            <li>{ieltsReading[6]}</li>
                            <li>{ieltsReading[7]}</li>
                            <li>{ieltsReading[8]}</li>
                            <li>{ieltsReading[9]}</li>
                            <li>{ieltsReading[10]}</li>
                            <li>{ieltsReading[11]}</li>
                            <li>{ieltsReading[12]}</li>
                            <li>{ieltsReading[13]}</li>
                            <li>{ieltsReading[14]}</li>
                            <li>{ieltsReading[15]}</li>
                            <li>{ieltsReading[16]}</li>
                        </ol>
                        <li>{ieltsReading[17]}</li>
                    </ul>

                    <h5 id="writingSection" className="heading">IELTS WRITING SECTION - </h5>
                    <ul>
                        {ieltsWriting.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="papers" className="heading">REFERENCE PAPERS FOR IELTS EXAMINATION</h3>
                    <ul>
                        {papers.map((item, id) => (
                            <li key={id}><a rel="noreferrer" target="_blank" href={item}>{item}</a></li>
                        ))}
                    </ul>
                    <h3 id="books" className="heading">REFERENCE BOOKS FOR IELTS EXAMINATION</h3>
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