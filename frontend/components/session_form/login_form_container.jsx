import React from 'react';
import { connect } from 'react-redux';
import {login} from '../../actions/session_actions';
import SessionsForm from "./session_form";

const msp = ({errors}) => ({
    errors: errors.session, 
    formType: 'login'
})

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(SessionsForm);