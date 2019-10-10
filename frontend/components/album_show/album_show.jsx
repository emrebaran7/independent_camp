import React from "react";
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
    constructor(props) {
        super(props);
        this.props.album.album = {
        };

        this.props.album.track = {
        };
        
        this.props.album.album.artist = {}
        this.props.album.album.description = ""
    }

    componentDidMount(){
        const albumId = this.props.match.params.albumId;
        this.props.fetchAlbum(albumId);
    }

    componentDidUpdate(prevProps) {
        if (typeof prevProps.album === 'undefined') {
            const albumId = this.props.match.params.albumId; 
            this.props.fetchAlbum(albumId);
        }
    }

    render(){
        // const tracks = this.props.album.tracks.map(track => {
        //     <li className="album-track-ele" key={track.id}>
        //         {track.ord}. {track.title}
        //     </li>
        // })
        
        // const tracks = this.props.album.tracks
        // debugger

        const description = this.props.album.album.description.split(" /nl/").map(line => {
            <li>{line}</li>
        })
        // debugger

        return (
            <div className='album-show-container'>
                <div className='album-show-left'>
                    <header>{this.props.album.album.title} <br/>
                        by {this.props.album.album.artist.artist_name} </header>
                    {/* audio player  */}
                    <strong>Digital Album</strong>
                    <p>High-quality download in MP3</p>
                    {/* <ul className='tracks'>{this.props.album.tracks}</ul> */}
                    <p className='album-description'>{this.props.album.album.description}</p>
                    <p className='album-release-date'>{this.props.album.album.release_date}</p>
                    <p className='album-release-credits'>{this.props.album.album.credits}</p>
                    <p> © all rights reserved</p>
                </div>

                <div className='album-show-right'>
                    <img src={this.props.album.album.photoUrl} alt=""/>
                </div>
            </div>
        )
    }
}
    
    export default AlbumShow;
