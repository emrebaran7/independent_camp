import React from 'react';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM";

import * as AlbumApiUtil from "../util/album_api_util"

const receiveAlbum = album => {
    return {
        type: RECEIVE_ALBUM,
        album
    };
};

const receiveAlbums = albums => {
    return {
        type: RECEIVE_ALBUMS,
        albums
    };
};

const removeAlbum = album => {
    return {
        type: REMOVE_ALBUM,
        albumId: album.id
    };
};


// thunk actions

export const fetchAllAlbums = () => dispatch => (
    AlbumApiUtil.fetchAlbums().then((albums) => dispatch(receiveAlbums(albums)))
)

export const fetchAlbum = (id) => dispatch => (
    AlbumApiUtil.fetchAlbum(id).then((album) => dispatch(receiveAlbum(album)))
)

export const createAlbum = (album) => dispatch => (
    AlbumApiUtil.createAlbum(album).then((album) => dispatch(receiveAlbum(album)))
)

export const updateAlbum = (album) => dispatch => (
    AlbumApiUtil.editAlbum(album).then((album) => dispatch(receiveAlbum(album)))
)

export const deleteAlbum = (id) => dispatch => (
    AlbumApiUtil.deleteAlbum(id).then((album) => dispatch(removeAlbum(album)))
)