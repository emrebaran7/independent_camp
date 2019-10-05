import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionsForm from "./session_form";

const msp = ({ errors }) => ({
    errors: errors.session,
    is_artist: false,
    formType: 'Fan Signup'
})

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionsForm);