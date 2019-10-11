import React from 'react';
import { connect } from 'react-redux';
import {createAlbum} from "../../actions/album_actions"
import AlbumForm from './album_form'
3
const msp = ({entities}) => {
    // debugger
    return({

        currentUser: entities.users.username,
        currentUserId: entities.users.id,
    })
}

const mdp = dispatch => ({
    processForm: (album) => dispatch(createAlbum(album))
})

export default connect(msp, mdp)(AlbumForm);


