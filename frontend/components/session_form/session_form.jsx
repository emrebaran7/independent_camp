import React from "react";
import {Redirect} from "react-router-dom"

class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            artist_name: "",
            artist_location: "",
            email: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user).then(() => this.props.history.push('/'))
    }

    renderErrors(){
        return(
            <div>
                <ul>
                    {this.props.errors.map((error) => (
                        <li>{error}</li>
                    ))}
                </ul>
            </div>
        )
    }
    
    render(){
        let extra;

        if (this.props.formType === "Artist Signup") {
            extra = 
                <>
                    <label className="login-signup-input-label"> Artist / Band Name
                        <input required required type="text" value={this.state.artist_name} onChange={this.update('artist_name')} className="login-singup-input" />
                    </label>
                    <label className="login-signup-input-label"> Email
                        <input required type="email" value={this.state.email} onChange={this.update('email')} className="login-singup-input" />
                    </label>
                </>
        }

        if (this.props.formType === "Fan Signup") {
            extra =
                <>
                    <label className="login-signup-input-label">  Email
                        <input required type="email" value={this.state.email} onChange={this.update('email')} className="login-singup-input" />
                    </label>
                </>
        }

        return(
            <div className="login-signup-container">
                <h2>{this.props.formType === "login" ? "Log In" : "Sign Up"}</h2>
                <hr />
                {this.renderErrors()}
                <form className="login-signup-box" onSubmit={this.handleSubmit}>
                    <div className="login-signup-form">
                        {extra}
                        <label className="login-signup-input-label">Username
                            <input required type="text" value={this.state.username} onChange={this.update('username')} className="login-singup-input"/>
                        </label>
                        <label className="login-signup-input-label">Password
                            <input required type="password" value={this.state.password} onChange={this.update('password')} className="login-singup-input" />
                        </label>
                    </div>
                    <input className="login-signup-submit" type="submit" value={this.props.formType === "login" ? "Log In" : "Sign Up"}/>
                </form>
            </div>
        )
    }
}

export default SessionForm;
