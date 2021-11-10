import React from 'react';
import ExamsList from '../Examinations/examsList';
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../Auth/AuthContext";
import { Link } from 'react-router-dom';
import { UniCarousel } from '../Universities/carousel';

export default function Homepage() {

    const { currentUser } = useAuth();

    return (
        <div>
            <UniCarousel />
            <div className="container-fluid m-5 p-5 mx-auto">
                <Link to={currentUser ? "/universities" : "/login"} className="pt-4 pb-4 ps-5 pe-5 fw-bold text-decoration-none fs-4 bg-info text-dark border border-light rounded-pill"> Search for Universities as per preference </Link>
            </div>
            <hr />
            <ExamsList />
        </div>
    )
}
