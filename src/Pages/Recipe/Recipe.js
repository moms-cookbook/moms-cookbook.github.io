import React, { Component } from 'react'
import { Meals } from './../../database/Meals'
import './Recipe.css'


export default class Recipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            meal: Meals[props.match.params.id]
        }
    }

    ingredientsfunc() {
        return this.state.meal.ingredients.map(
            (ingredient, index) => {
                return <li key={index}> {ingredient} </li>
            }
        )
    }

    preperationfunc() {
        return this.state.meal.preperation.map(
            (preperation, index) => {
                return <li key={index}> {preperation} </li>
            }
        )
    }

    render() {
        return (
            (this.state.meal === undefined) ?
                <></> :
                <div className="recipe-container">
                    <div className="recipe-title">
                        <h1>{this.state.meal.title}</h1>
                    </div>

                    <div className="recipe-bos">
                        <div className="image-container">
                            <img alt="main" src={`../../../${this.state.meal.image}`} />
                        </div>
                        <div className="user">
                        </div>
                    </div>

                    <div className="recipe-ingredients">
                        <h1>Malzemeler</h1>
                        <ul>
                            {
                                this.ingredientsfunc()
                            }
                        </ul>
                    </div>

                    <div className="recipe-preperation">
                        <div className="preperation-real">
                            <h1>Yapılışı</h1>
                            <ul>
                                {
                                    this.preperationfunc()
                                }
                            </ul>
                        </div>
                        <div className="preperation-images">
                            <img alt="meals" src={`../${this.state.image}`}/>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>
        )
    }
}
