import React from "react";

class AlbumForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            artist_id: this.props.currentUserId,
            title: "",
            description: "",
            credits: "",
            release_date:"",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e){
        debugger
        e.preventDefault();
        const album = Object.assign({}, this.state)
        this.props.processForm(album).then((id) => this.props.history.push(`/${id}`))
    }

    renderErrors() {
        return (
            <div>
                <ul>
                    {this.props.errors.map((error) => (
                        <li>{error}</li>
                    ))}
                </ul>
            </div>
        )
    }

    render(){
        return(
            <div className="album-form-container">
                <div id="album-form-left">
                    {this.props.title}    
                    By {this.props.currentUser}
                </div>
                <div id="album-form-right">
                    <form className="album-form" onSubmit={this.handleSubmit}>
                        <label className="album-form-input-label">
                            <input required type="text" value={this.state.title} onChange={this.update('title')} className="album-form-title-input" placeholder="Album Title"/>
                        </label>
                        <label className="album-form-input-label">release date:
                            <input required type="date" value={this.state.release_date} onChange={this.update('release_date')} className="album-form-title-release_date"/>
                        </label>
                        <label className="album-form-input-label">
                            <input required type="image" value={this.state.image} onChange={this.update('image')} className="album-form-description-input" placeholder="leave blank to use artist name"/>
                        </label>
                        <label className="album-form-input-label">artist:
                            <input required type="text" value={this.state.artist_id} onChange={this.update('artist_name')} className="album-form-description-input" placeholder="leave blank to use artist name"/>
                        </label>
                        <label className="album-form-input-label">about this album:
                            <input required type="text" value={this.state.description} onChange={this.update('description')} className="album-form-description-input" placeholder="optional"/>
                        </label>
                        <label className="album-form-input-label">album credits:
                            <input required type="text" value={this.state.credits} onChange={this.update('credits')} className="album-form-credits-input" placeholder="optional"/>
                        </label>
                        <input type="submit" value="Publish"/>  
                    </form>
                </div>
            </div>
        )
    }
}

export default AlbumForm;
