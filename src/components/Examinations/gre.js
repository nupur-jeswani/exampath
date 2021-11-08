import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./examinations.css";

export const Gre = () => {

    const [data, setData] = useState({});
    const [examdata, setExamdata] = useState({});

    // getting data and saving it in the state
    useEffect(() => {
        const getDetails = async () => {
            const docRef = doc(db, "examinations", "GRE");
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                setData(docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }

            const examPatternRef = doc(db, "examinations", "GRE", "Exam Pattern Information", "Information")
            const examPatternSnap = await getDoc(examPatternRef);

            if (examPatternSnap.exists()) {
                setExamdata(examPatternSnap.data());
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
                                            <h3>About GRE (Graduate Record Examinations) - </h3>
                                            <p>{arr[1]}</p>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "GREmotive" && (
                                        <>
                                            <h3>Why should one consider giving GRE?</h3>
                                            <p>You should consider giving GRE if - </p>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "registration" && (
                                        <>
                                            <h3>Registration details for GRE - </h3>
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
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "cutoff" && (
                                        <>
                                            <h3>GRE Cutoffs - </h3>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "scoreCard" && (
                                        <>
                                            <h3>What will your GREscore card contain? </h3>
                                            <p>{arr[1]}</p>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "preparationTips" && (
                                        <>
                                            <h3>GRE Preparation Tips and Tricks -  </h3>
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
                                    arr[0] === "introduction" && (
                                        <>
                                            <h3>Basic Structure of GRE examination - </h3>
                                            <p>{arr[1]}</p>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "GRE Analytical Writing" && (
                                        <>
                                            <h4>GRE Analytical Writing - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "GRE Quantitative Reasoning" && (
                                        <>
                                            <h4>GRE Quantitative Reasoning - </h4>
                                            <ul>
                                                {arr[1].map(item => <li>{item}</li>)}
                                            </ul>
                                        </>
                                    )
                                }
                                {
                                    arr[0] === "GRE Verbal Reasoning" && (
                                        <>
                                            <h4>GRE Verbal Reasoning - </h4>
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