import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../App.css';

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (isLoggedIn); // use localStorage here 
        setIsLoggedIn(localStorage.getItem());
    }, []);

    if (isLoggedIn) {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/home">
                            <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                                height="24px" alt="Capgemini" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/sample" >Sample</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/javadata" >JavaData</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/mymedia" >My Media</Link>
                                </li>
                                <li className="nav-item">
                                    {/* Create and Send to logout  */}
                                    <Link className="nav-link" to="/login">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );

    }
    else {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <Link className="navbar-brand" to="/home">
                            <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                                height="24px" alt="Capgemini" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item align-end">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }



}
export default Header;


