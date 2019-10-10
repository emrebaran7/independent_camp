export const getFeaturedAlbums = state => {
    
    const albums = state.entities.albums
    let feat = state.ui.albumIds.map(id => albums[id])

    return feat;
}


//refactor BIG TIME

export const getFeaturedAlbumsArtists = state => {

    const albums = state.entities.albums
    let feat = state.ui.albumIds.map(id => albums[id])
    let artists = {}
    
    feat.forEach(f => {
        artists[f.artist_id] = state.entities.users[f.artist_id];
    });

    return artists;
}

export const selectAlbum = ({ albums }, albumId) => {
    return albums[albumId]
};
