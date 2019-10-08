import React from 'react';

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
        let mainFeaturedAlbum = (
            <div className="splash-main-featured-container" key={firstAlbum.id}>
                <div className="splash-main-featured-level-1">{firstAlbum.title}</div>
                By <div className="splash-main-featured-level-2">{firstAlbum.aritst_id}</div>
                Listen
            </div>
        )
        const sideFeaturedAlbums = this.props.featuredAlbums.slice(1).map(album => {
            return (
                <li className="splash-side-featured" key={album.id}>
                    <div className="splash-side-featured-level-1">{album.title}</div>
                    By <div className="splash-side-featured-level-2">{album.artist}</div> 
                    Listen
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