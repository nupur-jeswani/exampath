import "./App.css";
import { Gre } from "./components/Examinations/gre";

// import { firebaseConfig } from "./configuration/config";
// import React, { useState, useEffect } from "react";
// import { db } from "./configuration/firebase";

function App() {
  return (
    <div className="App">
      <h1> Examinations </h1>
      
      <Gre />

    </div>
  );
}

export default App;
