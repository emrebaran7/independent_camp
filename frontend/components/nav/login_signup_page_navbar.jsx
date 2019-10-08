import React from "react";
import { Link } from 'react-router-dom';

export const LoginSignupNavbar = () => {
    return (
        <nav className="main-navbar">
            <section className="left-navbar">
                <Link exact to="/" className="logo"><div className="parallelogram"></div>Independentcamp</Link>
            </section>
        </nav>
    );
}

