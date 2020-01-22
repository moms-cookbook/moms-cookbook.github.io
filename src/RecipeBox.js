import React, { Component } from 'react'
import './RecipeBox.css'
import Recipe from './Recipe'
import {MealArray} from './database/Meals'

class RecipeBox extends Component {
    boxfunc(){
        return MealArray.map(
            (meal, index) => {
                return <Recipe key={index} ingredients={meal.ingredients} text={meal.title} image={meal.image}/>
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