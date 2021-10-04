import React from "react";
import { db } from "../../configuration/firebase"

export const Gre = () => {
    var docRef = db.collection("examinations").doc("GRE");
    // docRef.get().then((doc) => {
    //     if (doc.exists) {
    //         console.log("Document Data", doc.data());
    //     } else {
    //         console.log("No document found. :/");
    //     }
    // }).catch((error) => {
    //     console.log(error);
    // });
    
    
    // ---------------------------------------

    
    // docRef.onSnapshot(doc => {
    //     const data = doc.data();
    //     console.log(data);
    // });

    return (  
        <div className="exam-container">
            <h1>GRE Details - </h1>
            
        </div>
    );
}
 
// export default Gre;
