import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
import illustration1 from "./images/extensive search engine.png";
import illustration2 from "./images/user friendly.png";
import illustration3 from "./images/horizon.jpg";
import illustration4 from "./images/backdrop1.png";
import illustration5 from "./images/illustration2.jpg";

export default function About() {
    return (
        <>
            <div className="container-fluid about">
                <div className="header">
                    <h1 className="fw-bolder">EXAMPATH</h1>
                </div>
            </div>

            <div className="container-fluid mt-5 p-4 about-div">
                <hr />
                <h2 className="fw-bold about-heading">ABOUT EXAMPATH</h2>
                <hr />
                <div className="container p-5 d-grid gap-5">
                    <div className="row p-4 shadow-sm">
                        <div className="col">
                            <img className="about-images" src={illustration1} alt="" height="400px"/>
                        </div>
                        <div className="col about-text">
                            <h1 className="mb-4 text-start">Extensive Search Engine</h1>
                            <p>ExamPath is an extensive research platform for students and parents seeking information about the higher education sector in India as well as abroad.</p>
                        </div>
                    </div>
                    <div className="row p-4 shadow-sm">
                        <div className="col about-text">
                            <h1 className="mb-4">User Friendly</h1>
                            <p>Exampath is going to be user friendly for students as they can get all the information at one place on an easy-to-use website.Students can use the filters easily to get the desired results. The information provided under every section is easy to read as well as understand </p>
                        </div>
                        <div className="col">
                            <img className="about-images" src={illustration2} alt="" height="500px"/>
                        </div>
                    </div>
                    <div className="row p-4 shadow-sm">
                        <div className="col">
                            <img className="about-images" src={illustration3} alt="" height="500px" />
                        </div>
                        <div className="col about-text">
                            <h1 className="mb-4 text-start">Helps to extend the student’s horizon:</h1>
                            <p>ExamPath is made by students, for the students. It is created to assist students to research and make a path for themselves for future studies and beyond.</p>
                        </div>
                    </div>
                    <div className="row p-4 shadow-sm">
                        <div className="col about-text">
                            <h1 className="mb-4">Authentic Information</h1>
                            <p>The information on the platform is a hundred per cent authentic as it has been verified with the official websites of the universities and exam-conducting websites.</p>
                        </div>
                        <div className="col">
                            <img className="about-images" src={illustration4} alt="" />
                        </div>
                    </div>
                    <div className="row p-4 shadow-sm">
                        <div className="col">
                            <img className="about-images" src={illustration5} alt="" height="350px" />
                        </div>
                        <div className="col about-text">
                            <h1 className="mb-4">Best for you</h1>
                            <p>Completing post graduation and getting admitted in best college , this is the decision which is very important in anyone's life that should not go wrong. So with the features that ExamPath provides every student can easily get into their dream college and pass the exams with flying colours.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
