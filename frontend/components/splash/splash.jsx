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
                <div className='spalash-main-featured-text'>
                    <div className="splash-main-featured-text-header">{firstAlbum.title}</div>
                    <div className="splash-main-featured-text-sub">By {featuredArtists[firstAlbum.artist_id].artist_name}</div> 
                    <Link className="listen" to={`/albums/${firstAlbum.id}`}>Listen</Link>
                </div>
            </div>
        )

      
        const sideFeaturedAlbums = this.props.featuredAlbums.slice(1).map(album => {
            return (
                <li className="splash-side-featured" key={album.id} style={{backgroundImage: "url("+album.photoUrl+")"}} >
                    <div className="splash-side-featured-text-header">{album.title}</div>
                    <div className="splash-side-featured-text-sub">By {featuredArtists[album.artist_id].artist_name}</div> 
                    <Link className="listen" to={`/albums/${album.id}`}>Listen</Link>
                    {/* <button onClick={`/albums/${album.id}`}>Listen</button> */}
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
                        Fans have paid artists&nbsp;<strong>$420 million</strong> &nbsp;using Independentcamp, and&nbsp;<strong>$8 million</strong>&nbsp;in the last 30 days alone.
                    </div>
            </div>   
        )
    }
    
}



export default Splash