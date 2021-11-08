import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./examinations.css";

export const Gmat = () => {

    const [data, setData] = useState({});
    const [examdata, setExamdata] = useState({});
    const [examScores, setExamScores] = useState({});
    const [registrationProcess, setRegistrationProcess] = useState({});
    const [resultCutoff, setResultCutoff] = useState({});

    // getting data and saving it in the state
    useEffect(() => {
        const getDetails = async () => {

            const docRef = doc(db, "examinations", "GMAT");
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setData(docSnap.data());
            } else {
                console.log("No such document!");
            }

            const examPatternRef = doc(db, "examinations", "GMAT", "Exam Pattern Information", "Information")
            const examPatternSnap = await getDoc(examPatternRef);

            if (examPatternSnap.exists()) {
                setExamdata(examPatternSnap.data());
            } else {
                console.log("No such subcollection found!");
            }

            const examScoresRef = doc(db, "examinations", "GMAT", "Exam Pattern Information", "Types of Scores ")
            const examScoresSnap = await getDoc(examScoresRef);

            if (examScoresSnap.exists()) {
                setExamScores(examScoresSnap.data());
            } else {
                console.log("No such subcollection found!");
            }

            const registrationRef = doc(db, "examinations", "GMAT", "Registration", "Process")
            const registrationSnap = await getDoc(registrationRef);

            if (registrationSnap.exists()) {
                setRegistrationProcess(registrationSnap.data());
            } else {
                console.log("No such subcollection found!");
            }

            const resultandcutoffRef = doc(db, "examinations", "GMAT", "Results and CutOffs", "YSa0y8De0hxFRFwTTYkV")
            const resultandcutoffSnap = await getDoc(resultandcutoffRef);

            if (resultandcutoffSnap.exists()) {
                setResultCutoff(resultandcutoffSnap.data());
            } else {
                console.log("No such subcollection found!");
            }

        }
        getDetails();
    }, []);

    // function renderDetail(val) {
    //     return (
    //         <>
    //             <h3>GRE motive</h3>
    //             <ul>
    //                 {`${val.map(item => <li>{item}</li>)}`}
    //             </ul>
    //         </>
    //     )
    // }

    // function renderDetail2(val) {
    //     return (
    //         <>
    //             <h3>About GRE (Graduate Record Examinations) - </h3>
    //             <p>{`${val}`}</p>
    //         </>
    //     )
    // }

    return (
        <div className="container">
            <div>
                {
                    // Object.entries(data).forEach(([key, value]) => {
                    //     if (key === "about") {
                    //         renderDetail2(value);
                    //     }
                    //     if (key === "GREmotive") {
                    //         renderDetail(value);
                    //     }
                    // })
                }
            </div>
            <div>
                {
                    Object.entries(data).map((arr, arrID) => (
                        <div key={arrID}>
                            <div className="container about-exam">
                                {
                                    arr[0] === "about" && (
                                        <>
                                            <h3>About GMAT (Graduate Management Admission Test) - </h3>
                                            <p>{arr[1]}</p>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "GMATmotive" && (
                                        <>
                                            <h3>Why should one consider giving GMAT?</h3>
                                            <p>You should consider giving GMAT if - </p>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "examFee" && (
                                        <>
                                            <h3>Examination Fee Details - </h3>
                                            <p>{arr[1]}</p>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "preparationTips" && (
                                        <>
                                            <h3>GMAT Preparation Tips and Tricks -  </h3>
                                            <p>Some preparation tips you might find helpful are - </p>
                                            <ol>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ol>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    ))}
            </div>
            <div>
                {
                    Object.entries(examdata).map((arr, arrID) => (
                        <div key={arrID}>
                            <div className="container about-exam">

                                {
                                    arr[0] === "Exam Pattern" && (
                                        <>
                                            <h3>Basic Structure of GMAT examination - </h3>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "Section-Wise details of Exam" && (
                                        <>
                                            <h4>Section wise details of the Exam - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "GMAT Analytical Writing Assessment:" && (
                                        <>
                                            <h4>GMAT Analytical Writing Assessment: - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "GMAT Integrated Reasoning Section:" && (
                                        <>
                                            <h4>GMAT Integrated Reasoning Section: - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "GMAT Quantitative Reasoning:" && (
                                        <>
                                            <h4>GMAT Quantitative Reasoning:- </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "GMAT Verbal Reasoning:" && (
                                        <>
                                            <h4>GMAT Verbal Reasoning: - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }

                            </div>
                        </div>
                    ))

                }
            </div>
            <div>
                {
                    Object.entries(examScores).map((arr, arrID) => (
                        <div key={arrID}>
                            <div className="container about-exam">

                                {
                                    arr[0] === "GMAT Analytical Writing Assessment Scoring Details:" && (
                                        <>
                                            <h3>GMAT Analytical Writing Assessment Scoring Details - </h3>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "GMAT IR Score" && (
                                        <>
                                            <h4>GMAT Integrated Reasoning Scoring Details - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "GMAT Quant Score" && (
                                        <>
                                            <h4>GMAT Quant Reasoning Scoring Details - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "GMAT Integrated Reasoning Section:" && (
                                        <>
                                            <h4>GMAT Integrated Reasoning Section - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "GMAT Verbal Score:" && (
                                        <>
                                            <h4>GMAT Verbal Reasoning Scoring Details - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    Object.entries(registrationProcess).map((arr, arrID) => (
                        <div key={arrID}>
                            <div className="container about-exam">

                                {
                                    arr[0] === "GMAT Online Registration process" && (
                                        <>
                                            <h3>GMAT Online Registration process - </h3>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "Online Payment Mode process:" && (
                                        <>
                                            <h4>Online Payment Mode process - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "GMAT Registration via Mail process" && (
                                        <>
                                            <h4>GMAT Registration via Mail process - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "GMAT Registration via Phone" && (
                                        <>
                                            <h4>GMAT Registration via Phone - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "Offline Payment Mode process:" && (
                                        <>
                                            <h4>Offline Payment Mode process - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "Information you’ll need handy for GMAT registration process:" && (
                                        <>
                                            <h4>Information you’ll need handy for GMAT registration process: - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    Object.entries(resultCutoff).map((arr, arrID) => (
                        <div key={arrID}>
                            <div className="container about-exam">

                                {
                                    arr[0] === "CutOffs in general" && (
                                        <>
                                            <h3>GMAT General CutOff details - </h3>
                                            <p>{arr[1]}</p>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "Factors Determining GMAT Cutoff for an Institution" && (
                                        <>
                                            <h4>Factors Determining GMAT Cutoff for an Institution - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "GMAT Cutoff 2021" && (
                                        <>
                                            <h4>GMAT CutOffs in 2021 - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "GMAT Cutoff For Top B-Schools in India" && (
                                        <>
                                            <h4>GMAT Cutoff For Top B-Schools in India - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}