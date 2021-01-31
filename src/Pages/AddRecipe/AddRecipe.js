import React from 'react';
import './AddRecipe.css'
import { Link } from 'react-router-dom'

class AddRecipe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: localStorage.getItem("loggedIn") || sessionStorage.getItem("loggedIn"),
            username: "" + (localStorage.getItem("username") ? localStorage.getItem("username") : "") + (sessionStorage.getItem("username") ? sessionStorage.getItem("username") : ""),
            title: "",
            images: "",
            ingredients: "",
            preperation: "",
        }
    }
    submit = () => {
        var xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () => {
            console.log(xhr.responseText)
        })
        xhr.open('POST', 'http://192.168.1.106:3001/recipe/add')
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        var data = JSON.stringify({
            title: this.state.title,
            images: this.state.images.split(";"),
            ingredients: this.state.ingredients.split(";"),
            preperation: this.state.preperation.split(";"),
            username: this.state.username
        });
        xhr.send(data);
    }
    componentDidMount() {
        document.title = "Add Recipe"
    }
    render() {
        return (
            (this.state.loggedIn) ?

                <div className="add-screen">
                    <label>Başlık Ekle</label>
                    <input name="title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                    <label>Resimleri Ekle</label>
                    <input name="images" value={this.state.images} onChange={(e) => this.setState({ images: e.target.value })} />
                    <label>Malzemeleri Ekle</label>
                    <input name="ingredients" value={this.state.ingredients} onChange={(e) => this.setState({ ingredients: e.target.value })} />
                    <label>Hazırlanışını Ekle</label>
                    <input name="preperation" value={this.state.preperation} onChange={(e) => this.setState({ preperation: e.target.value })} />

                    <button onClick={this.submit}>add</button>
                </div>
                :
                <div><Link to="/login">Giriş Yapınız</Link></div>
        )
    }
}

export default AddRecipe