export const getFeaturedAlbums = state => {
    
    const albums = state.entities.albums
    let feat = state.ui.albumIds.map(id => albums[id])

    return feat;
}


//refactor BIG TIME

export const getFeaturedAlbumsArtists = state => {

    const albums = state.entities.albums
    let feat = state.ui.albumIds.map(id => albums[id])
    let artists = feat.map(feat => state.entities.users[feat.artist_id] ) 

    return artists;
}

export const selectAlbum = ({ albums }, albumId) => {
    return albums[albumId]
};
