import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./examinations.css";

export const Gre = () => {

    // Core GRE States
    const [about, setAbout] = useState("");
    const [greMotive, setGreMotive] = useState([]);
    const [registration, setRegistration] = useState([]);
    const [examFee, setExamFee] = useState([]);
    const [cutoff, setCutoff] = useState([]);
    const [scoreCard, setScoreCard] = useState("");
    const [prepTips, setPrepTips] = useState([]);

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

    return (
        <div className="container">
            <div>
                <h2>About</h2>
                <p>{about}</p>

                <h2>GRE Motive</h2>
                <ul>
                    {greMotive.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h2>Registration</h2>
                <ul>
                    {registration.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h2>Examination Fees</h2>
                <ul>
                    {examFee.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h2>Cut-off</h2>
                <ul>
                    {cutoff.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h2>Score Card</h2>
                <p>{scoreCard}</p>

                <h2>Preparation Tips</h2>
                <ul>
                    {prepTips.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Exam Details */}

            <div>
                <h2>Introduction</h2>
                <p>{intro}</p>

                <h2>GRE Analytical Writing</h2>
                <ul>
                    {greAnalytical.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h2>GRE Quantitative Reasoning</h2>
                <ul>
                    {greQuantitative.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>

                <h2>GRE Verbal Reasoning</h2>
                <ul>
                    {greVerbal.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}