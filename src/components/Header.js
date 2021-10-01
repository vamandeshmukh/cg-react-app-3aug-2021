import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {

    return (
        <div>
            <Link to="/home">Home </Link>
            <Link to="/sample">Sample </Link>
            <Link to="/javadata">JavaData </Link>
            <Link to="/login">Login </Link>
            <Link to="/register">Register </Link>

        </div>

    );
    // return (
    //     <div className="container" >
    //         <p>header Component</p>
    //     </div>
    // );
}
export default Header;


