import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./examinations.css";

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


    return (
        <div className="container">
            <div className="about-exam">

                {/* Basic GATE information */}

                <h2>About GATE</h2>
                <p>{about}</p>

                <h2>GATE Motive</h2>
                <ul>
                    {gateMotive.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h2>GATE CutOffs</h2>
                <ul>
                    {gateCutOff.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h2>Examination Fees</h2>
                <ul>
                    {examFee.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h2>Preparation Tips</h2>
                <ul>
                    {prepTips.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h2>What changes will be there in GATE-2022? </h2>
                <ul>
                    {gateRecentChanges.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="about-exam">
                <h2>Registration Details for GATE Exam</h2>

                <h4>Steps to Register for Gate Exam</h4>
                
                <h4>Step 1: GATE Registration</h4>
                <ul>
                    {gateOnlineReg.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h4>Step 2: Filling of GATE Application Form 2022</h4>
                <ul>
                    {gateAppForm.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h4>Step 3: Upload Required Documents for GATE Registration</h4>
                <ul>
                    {gateReqDocs.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h4>Step 4: Payment of GATE Application Fee 2022</h4>
                <ul>
                    {gatePayment.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h4>Step 5: Online Net-Banking Payment Details:</h4>
                <ul>
                    {gateOnlinePay.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h4>Step 6: Accepting the Declaration</h4>
                <ul>
                    {gateDeclaration.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h4>Steps to edit: GATE 2022 Application Correction</h4>
                <ul>
                    {gateEditForm.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="about-exam">
                <h2>GATE Exam Pattern Details -  </h2>

                <h4>Exam Pattern</h4>
                <ul>
                    {examPattern.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h5>Verbal Ability includes - </h5>
                <ul>
                    {gateVerbal.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h5>Numerical Ability includes - </h5>
                <ul>
                    {gateNumerical.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}