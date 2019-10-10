import { connect } from 'react-redux';
import { fetchFourAlbums } from '../../actions/album_actions';
import Splash from './splash';
import {getFeaturedAlbums, getFeaturedAlbumsArtists} from '../../reducers/selectors'

const msp = (state) => {
    // debugger
    const featuredAlbums = getFeaturedAlbums(state);
    const featuredArtists = getFeaturedAlbumsArtists(state);
    debugger

    return ({
        featuredAlbums: featuredAlbums,
        featuredArtists: featuredArtists
    })
}

const mdp = (dispatch) => ({
    fetchFourAlbums: () => dispatch(fetchFourAlbums())
})

export default connect(msp, mdp)(Splash)