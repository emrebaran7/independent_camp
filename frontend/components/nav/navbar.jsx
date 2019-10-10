import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { matchPath } from 'react-router-dom';

class Navbar extends React.Component{
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout().then(() => this.props.history.push('/'));
    }

    render(){
        // debugger
        if (this.props.location.pathname === '/login' || this.props.location.pathname === '/artist/signup' || this.props.location.pathname === '/fan/signup') {
            return (
                <nav className="bare-navbar">
                    <section className="left-navbar">
                        <Link to="/" className="logo"><div className="parallelogram"></div>Independentcamp</Link>
                    </section>
                </nav>
            )
        }

        if (this.props.currentUser){
            return(
                <nav className="main-navbar">
                    <section className="left-navbar">
                        <Link to="/" className="logo"><div className="parallelogram"></div>Independentcamp</Link>
                    </section>
                    <section className="right-navbar">
                        <button className="logout" onClick={this.handleSubmit}>Log Out</button>
                    </section>
                </nav>

            );
        } else {
            return(
                <nav className="main-navbar">
                    <section className="left-navbar">
                        <Link exact to="/" className="logo"><div className="parallelogram"></div>Independentcamp</Link>
                        <div className="motto">Discover amazing new music and directly support the artists who make it.</div>
                    </section>
                    <section className="right-navbar">
                        <Link exact to="login" >Log In</Link>
                        <Link exact to="artist/signup">Artist Sign Up</Link>
                        <Link exact to="fan/signup">Fan Sign Up</Link>
                    </section>
                </nav>   
            );
        }
    }
}

export default withRouter(Navbar)

