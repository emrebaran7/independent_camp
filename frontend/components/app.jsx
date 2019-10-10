
import React from "react";
import { Route } from 'react-router-dom'
import ArtistSignupFormContainer from './session_form/artist_signup_form_container'
import FanSignupFormContainer from './session_form/fan_signup_form_container'
import LoginFormContainer from './session_form/login_form_container'
import ProfileShowContainer from './profile_show/profile_show_container'
import AlbumShowContainer from './album_show/album_show_container'
import SplashContainer from './splash/splash_container'
import {AuthRoute} from '../util/route_util'
import {Link} from 'react-router-dom'
import NavbarContainer from './nav/navbar_container'


const App = () => (
    <div>
        <div className="navbar-container">     
            <NavbarContainer/>
        </div>

        <AuthRoute path="/artist/signup" component={ArtistSignupFormContainer} />
        <AuthRoute path="/fan/signup" component={FanSignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <Route path="/profile" component={ProfileShowContainer} />
        <Route exact path="/" component={SplashContainer} />
        <Route exact path="/albums/:albumId" component={AlbumShowContainer} />
        

        <footer>
            <div className="left-footer">Independentcamp is a clone of bandcamp created by Emre Ersolmaz
                <a href="https://www.linkedin.com/in/emre-ersolmaz/">LinkedIn</a>
                <a href="https://github.com/emrebaran7">Github</a>
                <a href="">Webpage</a>
            </div>
            <div className="right-footer">
                <Link to="/artist/signup">Independentcamp for Aritsts</Link>
                <Link to="/fan/signup">Independentcamp for Fans</Link>
            </div>
        </footer>
    </div>
)

export default App;