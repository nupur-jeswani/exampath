import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./examinations.css";

export const Toefl = () => {

    // Core TOEFL States
    const [about, setAbout] = useState("");
    const [toeflMotive, setToeflMotive] = useState([]);

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

    return (
        <div className="container">
            <div className="about-exam">

                {/* Basic TOEFL information */}

                <h2>About TOEFL</h2>
                <p>{about}</p>

                <h2>Why should one consider giving TOEFL?</h2>
                <ul>
                    {toeflMotive.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="about-exam">

                <h2>Registration Process for TOEFL Exam</h2>

                <h4>TOEFL Registration Details - </h4>
                <p>{toeflRegDetails}</p>

                <h4>TOEFL Eligibility Test</h4>
                <ul>
                    {toeflEligibilityTest.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h4>Documents Required for TOEFL Registration</h4>
                <ul>
                    {toeflReqDocs.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h4>TOEFL Registration Fee and Payment Mode</h4>
                <p>{toeflExamFee}</p>

                <h4>TOEFL Registration Form Cancellation / Rescheduling</h4>
                <ul>
                    {toeflCancellation.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

            </div>

            <div className="about-exam">
                <h2>TOEFL Exam Pattern Details -  </h2>

                <h4>TOEFL Exam Pattern</h4>
                <p>{toeflExamPattern}</p>

                <h3>TOEFL Exam Syllabus - </h3>
                <p>{toeflSyllabusIntro}</p>

                <h4>TOEFL Reading Comprehension Section Details</h4>
                <ul>
                    {toeflReading.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h5>TOEFL Speaking Section - </h5>
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

                <h5>TOEFL Writing Section - </h5>
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

                <h5>TOEFL Listening Section - </h5>
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
            </div>

            <div className="about-exam">
                <h2>About TOEFL Results and Scoring Details -  </h2>

                <h4>Calculation of TOEFL Scores </h4>
                <ul>
                    {toeflScore.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h4>TOEFL Score Range </h4>
                <ul>
                    {toeflScoreRange.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h3>Scoring information for various sections of TOEFL Examination - </h3>

                <h4>TOEFL Reading and Listening Section Scoring Pattern</h4>
                <ul>
                    {toeflRLCal.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h5>TOEFL Speaking Section Scoring Pattern - </h5>
                <ul>
                    {toeflSpeakingCal.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h5>TOEFL Writing Section Scoring Pattern - </h5>
                <ul>
                    {toeflWritingCal.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h3>How to get your TOEFL Result?</h3>
                <p>{toeflReceiveResult}</p>

                <h3>How to Report your TOEFL scores?</h3>
                <p>{toeflScoreReporting}</p>

                <h3>How to convert Your TOEFL scores to Percentile?</h3>
                <ul>
                    {toeflPercentile.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h3>Difference Between your TOEFL and IELTS and Which exam should you take? - </h3>
                <ul>
                    {toeflIeltsCompare.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}