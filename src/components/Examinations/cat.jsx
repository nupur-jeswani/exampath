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
    const [papers, setPapers] = useState([]);

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
                setPapers(data.papers);
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
                            <p>Introduction To CAT - </p>
                            <a href="#about">About CAT Examination</a>
                            <a href="#motive">Points to Remember</a>
                            <a href="#preptips">Preparation Tips for CAT examination</a>

                            <p>CAT Registration -</p>
                            <a href="#appFormFill">Application From Details</a>
                            <a href="#payment">Payment details</a>
                            <a href="#examcenter">Exam Center Selection</a>
                            <a href="#docs">Documents required for Registration</a>
                            <a href="#impRegDetails">Important Registration details</a>

                            <p>Core Details of CAT Examination -</p>
                            <a href="#examPattern">CAT Examination Pattern</a>
                            <a href="#examSyllabus">CAT Syllabus</a>
                            <ul>
                                <li><a href="#verbalAbility">CAT Verbal and Reading Section</a></li>
                                <li><a href="#ILReasoning">CAT data interpretation and logical reasoning Section</a></li>
                                <li><a href="#quantApt">CAT Quantitative aptitude Section</a></li>
                            </ul>

                            <p>Scoring information -</p>
                            <a href="#scoreCard">Score Card</a>
                            <a href="#detailScore">Details on your score card</a>
                            <a href="#percentileCal">Percentile Calculation</a>

                            <p>References for CAT Examination</p>
                            <a href="#papers">Reference Papers for CAT</a>
                            <a href="#books">Reference Papers for CAT</a>
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
                        <img src={cat} alt="CAT Illustration Backdrop" height="600px" />
                        <div className="container-fluid image-content">
                            <h1 className="fw-bolder">COMMON ADMISSION TEST</h1>
                            <h4>(CAT)</h4>
                        </div>
                    </div>
                    {/* Basic CAT information */}

                    <h3 id="about" className="heading">ABOUT THE EXAMINATION</h3>
                    <p>{about}</p>

                    <h3 id="impDetails" className="heading text-uppercase">Important Points About CAT</h3>
                    <h4 className="heading">Official Website for CAT - <a rel="noreferrer" target="_blank" href="https://iimcat.ac.in/per/g01/pub/756/ASM/WebPortal/1/index.html?756@@1@@1">CAT</a></h4>
                    <ul>
                        {catHighlights.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="preptips" className="heading text-uppercase">Preparation Tips</h3>
                    <ul>
                        {prepTips.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 className="heading text-uppercase">Registration Process for CAT Exam</h3>

                    <h4 id="appFormFill" className="heading text-uppercase">Filling the Registration Form of CAT Examination</h4>
                    <ul>
                        {catAppForm.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="payment" className="heading text-uppercase">Payment Details for CAT Examination</h4>
                    <ul>
                        {catAppPay.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="examcenter" className="heading text-uppercase">Selecting an Exam Center for CAT</h4>
                    <ul>
                        {catExamCenter.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="docs" className="heading text-uppercase">Documents Required for CAT Registration</h4>
                    <ul>
                        {catReqDocs.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="impRegDetails" className="heading text-uppercase">Important Details to remember while Registering for CAT </h4>
                    <ul>
                        {catImpPoints.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 className="heading text-uppercase">CAT Exam Pattern Details -  </h3>

                    <h4 id="examPattern" className="heading text-uppercase">CAT Exam Pattern</h4>
                    <ul>
                        {examPattern.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="examSyllabus" className="heading text-uppercase">CAT Exam Syllabus - </h4>
                    <ul>
                        {catSyllabus.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5 id="verbalAbility" className="heading text-uppercase">CAT Verbal Ability and Reading Comprehension - </h5>
                    <ul>
                        {catVerbal.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5 id="ILReasoning" className="heading text-uppercase">CAT Data Interpretation and Logical Reasoning - </h5>
                    <ul>
                        {catLogical.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h5 id="quantApt" className="heading text-uppercase">CAT quantitative Aptitude - </h5>
                    <ul>
                        {catQuantitative.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 className="heading text-uppercase">Details about CAT ScoreCard and Percentile Calculation</h3>

                    <h4 id="scoreCard" className="heading text-uppercase">About CAT's Score Card </h4>
                    <p>{intro}</p>

                    <h4 id="detailScore" className="heading text-uppercase">Details mentioned on ScoreCard</h4>
                    <ul>
                        {catScoreCard.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h4 id="percentileCal" className="heading text-uppercase">Calculating Percentile</h4>
                    <ul>
                        {catPercentileCal.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>

                    <h3 id="papers" className="heading">REFERENCE PAPERS FOR CAT EXAMINATION</h3>
                    <ul>
                        {papers.map((item, id) => (
                            <li key={id}><a rel="noreferrer" target="_blank" href={item}>{item}</a></li>
                        ))}
                    </ul>
                    <h3 id="books" className="heading">REFERENCE BOOKS FOR CAT EXAMINATION</h3>
                    <ul>
                        <li><a rel="noreferrer" target="_blank" href="https://www.snapdeal.com/product/quantitative-aptitude-for-cat-9th/655164604073?supc=SDL909849440&utm_source=earth&utm_medium=655164604073_372_364_599&vendorCode=S9b8a8&isSellerPage=true&fv=true&utm_source=earth_pla&utm_campaign=snapdeal_pla_account_pla_all_products_roas_1d_ftu&utm_medium=&utm_term=498562763992_118648795118_{bidstrategy}&gclid=Cj0KCQiA-K2MBhC-ARIsAMtLKRuu45xZzR5_JGbVXM6XTDGr0hTmS6M0XZop8KzRqzg03DCBLULJMM8aAk5JEALw_wcB">How to Prepare for QUANTITATIVE APTITUDE for CAT | 9th Edition Paperback by Arun Sharma</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://www.flipkart.com/cat-books-arun-sharma-2021-set-4-quantitative-aptitude-logical-reasoning-data-interpretation-verbal-ability-reading-comprehension/p/itm0ce833084a194?pid=RBKG5YYA9FH4MJGZ&lid=LSTRBKG5YYA9FH4MJGZILVX9I&marketplace=FLIPKART&cmpid=content_regionalbooks_8003060057_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,395332127672,,,,c,,,,,,,&ef_id=Cj0KCQiA-K2MBhC-ARIsAMtLKRulgEa9UrW7NgLx-AoYJ58PWM-PO9fypELQNPow1tXmtRHXMY1Mux8aAh7sEALw_wcB:G:s&s_kwcid=AL!739!3!395332127672!!!u!295092701166!&gclid=Cj0KCQiA-K2MBhC-ARIsAMtLKRulgEa9UrW7NgLx-AoYJ58PWM-PO9fypELQNPow1tXmtRHXMY1Mux8aAh7sEALw_wcB&gclsrc=aw.ds">CAT Books By Arun Sharma 2021 ( Set Of 4 Books ) - Quantitative Aptitude + Logical Reasoning + Data Interpretation + Verbal Ability/Reading Comprehension  (Paperback, arun sharma)</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://www.oswaalbooks.com/book-detail/oswaal-cat-23-years-chapter-wise-and-topic-wise-solved-papers-9789354630712?utm_source=Google&campaign_ID=15145656424&pl=&n=g&gclid=Cj0KCQiA-K2MBhC-ARIsAMtLKRuO3pApca1tp2zI6oSswwMFAABAbFPP0wG0nnRiLoGRwEXFxCCdbH4aApEJEALw_wcB">Oswaal CAT 23 Years Chapter-wise and Topic-wise Solved Papers</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://www.amazon.in/Chapter-Wise-Solved-Previous-Meenakshi-Upadhyay/dp/9390185815/ref=asc_df_9390185815/?tag=googleshopdes-21&linkCode=df0&hvadid=396987716775&hvpos=&hvnetw=g&hvrand=11491598147710983456&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9040246&hvtargid=pla-963390175657&psc=1&ext_vrnc=hi">Chapter-Wise Solved Previous Years' Papers for CAT By Arun Sharma and Meenakshi Upadhyay Paperback</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}