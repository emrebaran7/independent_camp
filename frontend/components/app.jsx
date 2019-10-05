
import React from "react";
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom'
import ArtistSignupFormContainer from './session_form/artist_signup_form_container'
import FanSignupFormContainer from './session_form/fan_signup_form_container'
import LoginFormContainer from './session_form/login_form_container'
import ProfileContainer from './profile_form/profile_container'
import {AuthRoute} from '../util/route_util'
// import LoginSignupHeader from "./nav/login_signup_header"


const App = () => (
    <div>
        <header className="nav-">
            {/* {LoginSignupHeader} */}
            <img src={window.bandcampURL}></img>
            <div className="login-signup-nav-empty"></div>
        </header>

        <AuthRoute path="/artist/signup" component={ArtistSignupFormContainer} />
        <AuthRoute path="/fan/signup" component={FanSignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <Route path="/profile" component={ProfileContainer} />

        <footer>
            <div>   

            </div>

            <div>

            </div>
        </footer>
    </div>
)

export default App;