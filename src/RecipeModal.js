import React from 'react'
import './RecipeModal.css'

class RecipeModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            ingredients: props.ingredients,
            image: props.image
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
                                {"<<"}
                            </div>
                        </div>
                        <div className="image-container">
                            <img alt="meal" src={`../${this.state.image}`} />
                        </div>
                        <div className="right-arrow">
                            <div>
                                {">>"}
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
                    <button>
                        Ayrıntılar
                    </button>
                    <button>
                        Favorime Ekle
                    </button>
                    <button>
                        Takip Et
                    </button>
                    <button onClick={this.close}>
                        Kapat
                    </button>
                </div>
            </div>
        )
    }
}

export default RecipeModal