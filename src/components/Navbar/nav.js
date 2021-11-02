import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import logo1 from '../../logo1.png';
import { Alert } from "react-bootstrap";
import { useAuth } from "../Auth/AuthContext";


const Nav = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const { currentUser, logout } = useAuth();
    const [error, setError] = useState("");
    const history = useHistory();

    async function handleLogOut() {
        setError("");

        try {
            await logout();
            history.push("/login");
        } catch {
            setError("Failed to logout!");
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="container-fluid ms-4 me-4">
                    <Link to="/" className="navbar-brand"> <img src={logo1} alt="exampath logo" height="50px" /> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} className="justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {currentUser ?
                                <>
                                    <li className="nav-item logged-in">
                                        <Link className="nav-link fw-bolder" to={"/"}>HOME</Link>
                                    </li>
                                    <li className="nav-item logged-in">
                                        <Link className="nav-link fw-bolder" to={"/"}>ABOUT US</Link>
                                    </li>
                                    <li className="nav-item logged-in">
                                        <Link className="nav-link fw-bolder" to={"/examinations/gre"}>EXAMINATIONS</Link>
                                    </li>
                                    <li className="nav-item logged-in">
                                        <Link className="nav-link fw-bolder" to={"/"}>UNIVERSITIES</Link>
                                    </li>
                                    <li className="nav-item logged-in">
                                        <Link className="nav-link fw-bolder" to={"/"}>PROFILE</Link>
                                    </li>
                                    <li className="nav-item logged-in">
                                        <button className="fw-bolder btn btn-outline-dark" onClick={handleLogOut}>LOG OUT</button>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item logged-out">
                                        <Link className="nav-link fw-bolder" to={"/login"}>LOGIN</Link>
                                    </li>
                                    <li className="nav-item logged-out">
                                        <Link className="nav-link fw-bolder" to={"/signup"}>CREATE ACCOUNT</Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>

                </div>
            </nav>
            {error && <Alert variant="danger"> {error} </Alert>}
        </>
    );
}

export default Nav;