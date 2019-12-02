import React from "react";

class AlbumForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            artist_id: "",
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

    handleSubmit(){
        e.preventDefault();
        const album = Object.assign({}, this.state)
        this.props.processForm(album).then(() => this.props.history.push('/'))
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
                <div className="album-form-container-right">
                    <form className="album-form" onSubmit={this.handleSubmit}>
                        <label className="album-form-input-label">
                            <input required type="text" value={this.state.title} onChange={this.update('title')} className="album-form-title-input" placeholder="Album Title"/>
                        </label>
                        <label className="album-form-input-label">Description
                            <input required type="text" value={this.state.description} onChange={this.update('description')} className="album-form-description-input" placeholder="optional"/>
                        </label>
                        <label className="album-form-input-label">Credits
                            <input required type="text" value={this.state.credits} onChange={this.update('credits')} className="album-form-credits-input" placeholder="optional"/>
                        </label>
                        <label className="album-form-input-label">Release Date
                            <input required type="text" value={this.state.release_date} onChange={this.update('release_date')} className="album-form-title-release_date"/>
                        </label>
                    </form>
                    <input type="submit" value="Publish"/>  
                 </div>
            </div>
        )
    }
}

export default AlbumForm;
