import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import firebase from "firebase/app";
import { doc, getDoc } from "firebase/firestore";


export const Gre = () => {

    const [data, setData] = useState({});

    // getting data and saving it in the state
    useEffect(() => {
        const getDetails = async () => {
            const docRef = doc(db, "examinations", "GRE");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        getDetails();

        // return 
    }, [])

    console.log(data);

    return (
        <div className="container-fluid">

            <p className="m-5">{data.about}</p>

            <ul>
                {
                    // data.cutoff.forEach(item => (
                    //     <li>{item}</li>
                    // ))
                }
            </ul>
        </div>
    );
}