import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionsForm from "./session_form";

const msp = ({ errors, entities}) => ({
    errors: errors.session,
    is_artist: true,
    artist_name: entities.users.artist_name,
    artist_location: entities.users.artist_location,
    formType: 'Artist Signup'
})

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionsForm);