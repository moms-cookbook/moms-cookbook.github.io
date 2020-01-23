import React from 'react'
import {Link} from 'react-router-dom'

import './RecipeModal.css'

class RecipeModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            ingredients: props.ingredients,
            image: props.image,
            mealkey: props.mealkey
        }
        this.close = props.close;
    }

    ingredientsfunc(){
        return this.state.ingredients.map(
            (ingredient, index) => {
                return <li key={index}> {ingredient} </li>
            }
        )
    }
    
    render() {
        return (
            <div className="recipeModal-container">
                <div className="modal-up">
                    <div className="modal-images">
                        <div className="left-arrow">
                            <div>
                                {"<"}
                            </div>
                        </div>
                        <div className="image-container">
                            <img alt="meal" src={`../${this.state.image}`} />
                        </div>
                        <div className="right-arrow">
                            <div>
                                {">"}
                            </div>
                        </div>
                    </div>
                    <div className="modal-ingredients">
                        <div className="ingredients-title"> 
                            {this.state.title}
                        </div>
                        <ul>
                            {
                                this.ingredientsfunc()
                            }
                        </ul>
                    </div>
                </div>
                <div className="modal-down">
                    <div>
                        <Link to={"/recipe/"+this.state.mealkey}>Ayrıntılar</Link>
                    </div>
                    <div>
                        Favorime Ekle
                    </div>
                    <div>
                        Takip Et
                    </div>
                    <div onClick={this.close}>
                        Kapat
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeModal