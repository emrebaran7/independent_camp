import { connect } from 'react-redux';

import { fetchAlbum } from '../../actions/album_actions';
import { selectAlbum } from '../../reducers/selectors';
import AlbumShow from './album_show';


const msp = (state, {match}) => {
    // debugger
    const albumId = parseInt(match.params.albumId);
    const album = state.entities.albums[albumId];
    let tracks = []; 
    if (album) {
        album.track_ids.forEach(trackId => { 
            const trackele = state.entities.tracks[trackId];
            if (trackele) {
                tracks.push(trackele);
            }
        })
    }

    // debugger

    return {
        albumId,
        album,
        tracks
    };
};

const mdp = dispatch => {
    return {
        fetchAlbum: id => dispatch(fetchAlbum(id))
    }
};

export default connect(msp, mdp)(AlbumShow);