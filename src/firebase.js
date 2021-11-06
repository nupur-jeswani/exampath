import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT,
    storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREID
})

export const db = getFirestore();
export const auth = getAuth();

export default app;
