
import React from 'react'
import './RecipeComponent.css'
import RecipeModal from './RecipeModal'

class RecipeComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: props.text,
            image: props.image,
            display: 'none',
            ingredients: props.ingredients,
            mealkey: props.mealkey
        }
    }

    closeModal = function () {
        this.setState({ display: 'none' })
    }.bind(this)

    render() {
        return (
            <div>
                <div className="recipecomponent-container" onClick={() => { this.setState({ display: 'flex' }); }}>
                    <div className="image-container">
                        <img alt="main" className="recipe-mainImage" src={`../${this.state.image}`} />
                    </div>

                    <h3>{this.state.text}</h3>
                </div>
                <div className="recipe-detail" style={{ display: this.state.display }}>
                    <RecipeModal close={this.closeModal} mealkey={this.state.mealkey} title={this.state.text} ingredients={this.state.ingredients} image={this.state.image} />
                </div>
            </div>
        )
    }
}

export default RecipeComponent