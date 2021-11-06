import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export const Gre = () => {

    const [data, setData] = useState({});

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
        }
        getDetails();

        // return 
    }, [])

    return (
        <div className="container-fluid">
            <div>
                {Object.entries(data).map((arr, arrID) => (
                    <div key={arrID}>
                        <div>
                            {
                                arr[0] !== "cutoff" && (
                                    <>
                                        <h2>{arr[0]}</h2>
                                        <p>{arr[1]}</p>
                                    </>
                                )
                            }
                            {
                                arr[0] === "cutoff" && (
                                    <>
                                        <h2>{arr[0]}</h2>
                                        <ul>
                                            {arr[1].map(item => <li>{item}</li>)}
                                        </ul>
                                    </>
                                )
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}