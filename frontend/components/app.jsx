
import React from "react";
import { Route } from 'react-router-dom'
import ArtistSignupFormContainer from './session_form/artist_signup_form_container'
import FanSignupFormContainer from './session_form/fan_signup_form_container'
import LoginFormContainer from './session_form/login_form_container'
import ProfileShowContainer from './profile_show/profile_show_container'
import SplashContainer from './splash/splash_container'
import {AuthRoute} from '../util/route_util'
import {Link} from 'react-router-dom'
import LoginSignupHeader from './nav/login_signup_header'


const App = () => (
    <div>
        <header className="nav-">
            {LoginSignupHeader}

            <div className="login-signup-nav-empty"></div>
        </header>

        <AuthRoute path="/artist/signup" component={ArtistSignupFormContainer} />
        <AuthRoute path="/fan/signup" component={FanSignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <Route path="/profile" component={ProfileShowContainer} />
        <Route exact path="/" component={SplashContainer} />


        <footer>
            <div className="left-footer">Independentcamp is a clone of bandcamp created by Emre Ersolmaz <br/>
                <a href="https://www.linkedin.com/in/emre-ersolmaz/">LinkedIn</a> <br/>
                <a href="https://github.com/emrebaran7">Github</a> <br />
                <a href="">Webpage</a> <br/>
            </div>
            <div className="right-footer">
                <Link exact to="/artist/signup">Independentcamp for Aritsts</Link><br/>
                <Link exact to="/fan/signup">Independentcamp for Fans</Link>
            </div>
        </footer>
    </div>
)

export default App;