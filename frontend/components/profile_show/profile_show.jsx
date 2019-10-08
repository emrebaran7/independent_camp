import React from "react";
import {Redirect} from 'react-router-dom'
import {logout} from '../../actions/session_actions'

class Profile extends React.Component {
    constructor(props){
        super(props);
        // currentUser = this.state.session

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        // debugger
        this.props.logout().then(() => this.props.history.push('/'));
    }


    render(){
        return(
            <button className="logout" onClick={this.handleSubmit} >Log Out</button>
        )
    }
}

export default Profile;