export const fetchAlbums = () => (
    $.ajax({
        method: 'GET',
        url: '/api/albums',
    })
);

export const fetchFourAlbums = () => (
    $.ajax({
        method: 'GET',
        url: 'api/albums/get_last/4'
    })
)
 
export const fetchAlbum = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/albums/${id}`,
    })
);

export const createAlbum = (album) => (
    $.ajax({
        method: 'POST',
        url: `/api/albums`,
        data: { album }
    })
);

export const editAlbum = (album) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/albums/${album.id}`,
        data: {album}
    })
);

export const deleteAlbum = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/albums/${id}`
    })
);