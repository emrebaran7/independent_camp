import React from 'react';

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

import * as TrackApiUtil from "../util/track_api_util"

const receiveTrack = track => {
    return {
        type: RECEIVE_TRACK,
        track
    };
};

const receiveTracks = tracks => {
    return {
        type: RECEIVE_TRACKS,
        tracks
    };
};

const removeTrack = track => {
    return {
        type: REMOVE_TRACK,
        trackId: track.id
    };
};


// thunk actions

export const fetchAllTracks = () => dispatch => (
    TrackApiUtil.fetchTracks().then((tracks) => dispatch(receiveTracks(tracks)))
)

export const fetchTrack = (id) => dispatch => (
    TrackApiUtil.fetchTrack(id).then((track) => dispatch(receiveTrack(track)))
)

export const createAlbum = (track) => dispatch => (
    TrackApiUtil.createTrack(track).then((track) => dispatch(receiveTrack(track)))
)

export const updateAlbum = (track) => dispatch => (
    TrackApiUtil.editTrack(track).then((track) => dispatch(receiveTrack(track)))
)

export const deleteAlbum = (id) => dispatch => (
    TrackApiUtil.deleteTrack(id).then((track) => dispatch(removeTrack(track)))
)