import React, { Component } from 'react'
import './RecipeBox.css'
import Recipe from './RecipeComponent'
import {Meals} from '../database/Meals'

class RecipeBox extends Component {
    boxfunc(){
        return Object.keys(Meals).map(
            (key, index) => {
                var meal = Meals[key];
                return <Recipe key={index} mealkey={key} ingredients={meal.ingredients} text={meal.title} image={meal.image}/>
            }
        )
    }
    render() {
        return (
            <div className="recipebox-container">
                {
                    this.boxfunc()
                }
            </div>
        )
    }
}
export default RecipeBox