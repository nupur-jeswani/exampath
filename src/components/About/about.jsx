import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
import illustration from "./images/illustration1.jpg";

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
                            <img className="about-images" src={illustration} alt="" />
                        </div>
                        <div className="col about-text">
                            <h1 className="mb-4">Lorem Ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum odio gravida quam imperdiet, ac convallis purus laoreet. Sed tempus auctor molestie.</p>
                        </div>
                    </div>
                    <div className="row p-4 shadow-sm">
                        <div className="col about-text">
                            <h1 className="mb-4">User Friendly</h1>
                            <p>Exampath is going to be user friendly for students as they can get all the information at one place on an easy-to-use website. </p>
                        </div>
                        <div className="col">
                            <img className="about-images" src={illustration} alt="" />
                        </div>
                    </div>
                    <div className="row p-4 shadow-sm">
                        <div className="col">
                            <img className="about-images" src={illustration} alt="" />
                        </div>
                        <div className="col about-text">
                            <h1 className="mb-4">Lorem Ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum odio gravida quam imperdiet, ac convallis purus laoreet. Sed tempus auctor molestie.</p>
                        </div>
                    </div>
                    <div className="row p-4 shadow-sm">
                        <div className="col about-text">
                            <h1 className="mb-4">Lorem Ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum odio gravida quam imperdiet, ac convallis purus laoreet. Sed tempus auctor molestie.</p>
                        </div>
                        <div className="col">
                            <img className="about-images" src={illustration} alt="" />
                        </div>
                    </div>
                    <div className="row p-4 shadow-sm">
                        <div className="col">
                            <img className="about-images" src={illustration} alt="" />
                        </div>
                        <div className="col about-text">
                            <h1 className="mb-4">Lorem Ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum odio gravida quam imperdiet, ac convallis purus laoreet. Sed tempus auctor molestie.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
