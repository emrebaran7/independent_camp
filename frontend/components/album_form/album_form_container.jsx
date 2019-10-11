import React from 'react';
import { connect } from 'react-redux';
import {createAlbum} from "../../actions/album_actions"

const msp = ({entities}) => {
    return({
        currentUser: entities.users[entities.session.id].username,
        currentUserId: entities.session.id,
    })
}

const mdp = dispatch => ({
    processForm: (album) => dispatch(createAlbum(album))
})

export default connect(msp, mdp)(AlbumForm);


