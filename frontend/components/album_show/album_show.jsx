import React from "react";
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const albumId = this.props.match.params.albumId;
        this.props.fetchAlbum(albumId);

        this.handleSongClick = this.handleSongClick.bind(this)
    }

    componentDidUpdate(prevProps) {
        const albumId = this.props.match.params.albumId;
        if ( prevProps.match.params.albumId !== albumId) {
            this.props.fetchAlbum(albumId);
        }
    }

    handleSongClick(e) {
        e.prevenDefault()
    }

    render(){
        if (!this.props.album || this.props.tracks.length < 1) {
            return null
        }
        let tracks = this.props.tracks.map(track => {
            return( 
                    <li className="album-track-ele" key={track.id}>
                        <button className="track-play"></button><div>{track.ord}.{track.title}</div>
                    </li>
                )
            })
        
        let description = this.props.album.description.split("/nl/").map((line, i) => {
            return <li key={i}>{line}</li>
        })

        let credits = this.props.album.credits.split("/nl/").map((line, i) => {
            return <li key={i}>{line}</li>
        })

        debugger

        const playlist = Object.values(this.props.tracks)
        
        // let songPlayer = new Audio()

        return (
            <div className='album-show-container'>
                <div className='album-show-left'>
                    <header>
                        <h2>{this.props.album.title}</h2>
                        <h3>By {this.props.album.artist.artist_name}</h3>
                    </header>

                    {/* {songPlayer} */}
                    <audio preload controls src={this.props.tracks[0].audioUrl}>
                        Your browser does not support the audio element.
                    </audio>

                    <strong>Digital Album</strong>
                    <p>High-quality download in MP3</p>
                    <ul className='tracks'>{tracks}</ul>
                    <ul className='album-description'>{description}</ul>
                    <p className='album-release-date'>Released {this.props.album.release_date}</p>
                    <ul className='album-release-credits'>{credits}</ul>
                    <p> © all rights reserved</p>
                </div>

                <div className='album-show-right'>
                    <img src={this.props.album.photoUrl} alt=""/>
                </div>
            </div>
        )
    }
}
    
    export default AlbumShow;
        // js audio player work

        // let trackSources;

        // this.props.tracks.forEach(track => {
        //    trackSources.push(track.audioUrl)
        // })

        // debugger

        // let song = new Audio();
        // let currentSong = 0;       

        // song.src = trackSources[0]
        // js audio player work