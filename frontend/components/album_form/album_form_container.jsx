import React from 'react';
import { connect } from 'react-redux';
import {createAlbum} from "../../actions/album_actions"
import AlbumForm from './album_form'

const msp = ({entities, errors}) => {
    debugger
    return({
        currentUser: Object.values(entities.users)[0].username,
        currentUserId: Object.values(entities.users)[0].id,
        errors
    })
}

const mdp = dispatch => ({ 
    processForm: (album) => dispatch(createAlbum(album))
})

export default connect(msp, mdp)(AlbumForm);
