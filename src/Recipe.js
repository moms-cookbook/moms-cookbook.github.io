import React from 'react'
import './Recipe.css'
import RecipeModal from './RecipeModal'

class Recipe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: props.text,
            image: props.image,
            display: 'none',
            ingredients: props.ingredients
        }
    }

    closeModal = function () {
        this.setState({ display: 'none' })
    }.bind(this)

    render() {
        return (
            <div>
                <div className="recipe-container" onClick={() => { this.setState({ display: 'flex' }); }}>
                    <div className="image-container">
                        <img alt="main" className="recipe-mainImage" src={`../${this.state.image}`} />
                    </div>

                    <h3>{this.state.text}</h3>
                </div>
                <div className="recipe-detail" style={{ display: this.state.display }}>
                    <RecipeModal close={this.closeModal} title={this.state.text} ingredients={this.state.ingredients} image={this.state.image} />
                </div>
            </div>
        )
    }
}

export default Recipe