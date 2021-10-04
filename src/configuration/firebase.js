// setup part 

import firebase from "firebase/app";
import { firebaseConfig } from "./config"
import firestore from "firebase/firestore";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true, merge: true });

export { db };
export default firebase;
