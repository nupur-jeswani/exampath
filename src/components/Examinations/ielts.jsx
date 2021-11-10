import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./examinations.css";

export const Ielts = () => {

    // Core IELTS States
    const [about, setAbout] = useState("");
    const [ieltscutoffs, setIeltscutoffs] = useState("");
    const [prepTips, setPrepTips] = useState([]);
    const [ieltsResult, setIeltsResult] = useState([]);

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


    return (
        <div className="container">
            <div className="about-exam">

                {/* Basic IELTS information */}

                <h2>About IELTS</h2>
                <p>{about}</p>

                <h2>Result Details</h2>
                <ul>
                    {ieltsResult.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h2>CutOff Details</h2>
                <p>{ieltscutoffs}</p>

                <h2>Preparation Tips</h2>
                <ul>
                    {prepTips.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="about-exam">
                <h2>Registration Process for IELTS Exam</h2>

                <h4>IELTS Registration Details - </h4>
                <ul>
                    {ieltsRegDetails.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h4>Online Registration for IELTS Examination</h4>
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

                <h4>Documents Required for IELTS Registration</h4>
                <ul>
                    {ieltsReqDocs.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h4>Examination Fees for IELTS</h4>
                <p>{ieltsExamFee}</p>

                <h4>Mode of Payment for IELTS Exam</h4>
                <ul>
                    {ieltsPayMode.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h4>What is IELTS indicator?</h4>
                <ul>
                    {ieltsRegIndicator.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="about-exam">
                <h2>IELTS Exam Pattern Details -  </h2>

                <h4>IELTS Exam Pattern</h4>
                <p>{ieltsIntro}</p>

                <h5>IELTS Exam Syllabus - </h5>
                <ul>
                    <li>{ieltsSyllabus[0]}</li>
                    <ol>
                        <li>{ieltsSyllabus[1]}</li>
                        <li>{ieltsSyllabus[2]}</li>
                    </ol>
                    <li>{ieltsSyllabus[3]}</li>
                    <li>{ieltsSyllabus[4]}</li>
                </ul>

                <h5>IELTS Speaking Section - </h5>
                <ul>
                    {ieltsSpeaking.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h5>IELTS Listening Section - </h5>
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


                <h5>IELTS Reading Section - </h5>
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

                <h5>IELTS Writing Section - </h5>
                <ul>
                    {ieltsWriting.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}