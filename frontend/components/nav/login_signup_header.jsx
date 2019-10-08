import React from "react";
import {Link} from 'react-router-dom';

export default loginSignupHeader = () => {
    return(
        <div>
            <nav className="login-signup-navbar">
                <div className="logo"></div>
                <div className="motto">Discover amazing new music and directly support the artists who make it.</div>
                <div className="navbar-session-links">
                    <Link exact to="login" >Log In</Link>
                    <Link exact to="artist/signup">Artist Sign Up</Link>
                    <Link exact to="fan/signup">Fan Sign Up</Link>
                </div>
            </nav>   
        </div>
    );
}