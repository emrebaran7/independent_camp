import React from "react";
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const albumId = this.props.match.params.albumId;
        this.props.fetchAlbum(albumId);
    }

    componentDidUpdate(prevProps) {
        debugger

        const albumId = this.props.match.params.albumId;

        if ( prevProps.match.params.albumId !== albumId) {
            this.props.fetchAlbum(albumId);
        }
    }

    render(){
        // debugger
        if (!this.props.album || this.props.tracks.length < 1) {
            return null
        }
        let tracks = this.props.tracks.map(track => {
            return( 
                    <li className="album-track-ele" key={track.id}>
                        <div>{track.ord}.{track.title}</div>
                    </li>
                )
            })
        
        let description = this.props.album.description.split("/nl/").map((line, i) => {
            return <li key={i}>{line}</li>
        })

        return (
            <div className='album-show-container'>
                <div className='album-show-left'>
                    <header>{this.props.album.title} <br/>
                        by {this.props.album.artist.artist_name}
                    </header>
                    {/* audio player  */}
                    <strong>Digital Album</strong>
                    <p>High-quality download in MP3</p>
                    <ul className='tracks'>{tracks}</ul>
                    <p className='album-description'>{description}</p>
                    <p className='album-release-date'>{this.props.album.release_date}</p>
                    <p className='album-release-credits'>{this.props.album.credits}</p>
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
