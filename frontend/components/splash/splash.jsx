import React from 'react';
import {Link} from 'react-router-dom'

class Splash extends React.Component{
    componentDidMount(){
        this.props.fetchFourAlbums();
    }

    render(){
        // debugger
        if (this.props.featuredAlbums.length < 1){
            return null;
        }
    
        const firstAlbum = this.props.featuredAlbums[0];
        const { featuredArtists } = this.props
        

        let mainFeaturedAlbum = (
            // debugger
            <div className="splash-main-featured-container" key={firstAlbum.id} style={{ backgroundImage: "url("+firstAlbum.photoUrl+")"}}>
                <div className="splash-main-featured-level-1">{firstAlbum.title}</div>
                <div className="splash-side-featured-level-2">By {featuredArtists[firstAlbum.artist_id].artist_name}</div> 
                <Link to={`/albums/${firstAlbum.id}`}>Listen</Link>
            </div>
        )

      
        const sideFeaturedAlbums = this.props.featuredAlbums.slice(1).map(album => {
            return (
                <li className="splash-side-featured" key={album.id} style={{backgroundImage: "url("+album.photoUrl+")"}} >
                    <div className="splash-side-featured-level-1">{album.title}</div>
                    <div className="splash-side-featured-level-2">By {featuredArtists[album.artist_id].artist_name}</div> 
                    <Link to={`/albums/${album.id}`}>Listen</Link>
                </li>
            )
        });

        return(
            <div>
                <section className="splash-featured-container">
                    {mainFeaturedAlbum}
                    <ul className="splash-side-featured-container">{sideFeaturedAlbums}</ul>
                </section>
                    <div className="splash-message">        
                        Fans have paid artists&nbsp;<strong>$420 million</strong> &nbsp;using Bandcamp, and&nbsp;<strong>$8 million</strong>&nbsp;in the last 30 days alone.
                    </div>
            </div>   
        )
    }
    
}



export default Splash