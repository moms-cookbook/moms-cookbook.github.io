import React, { Component } from 'react'
import './Recipe.css'


export default class Recipe extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            id: props.match.params.id,
            meal:{
                images:[""],
                title:"",
                ingredients:[""],
                preperation:[""]
            }
        }
    }
    async componentDidMount() {
        console.log("Mounted")

        this.setState({ meal: await this.getRecipe(this.state.id) })
    }

    async getRecipe(title) {

        var data = await fetch('http://192.168.1.106:3001/recipe/' + title).then(response=>response.json());
        return data;
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
            (this.state.meal === undefined || this.state.meal === null) ?
                <></> :
                <div className="recipe-container">
                    <div className="recipe-title">
                        <h1>{this.state.meal.title}</h1>
                    </div>
                    <div className="recipe-bos">
                        <div className="image-container">
                            <img alt="main" src={`../../../${this.state.meal.images[0]}`} />
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
                            <img alt="meals" src={`../${this.state.meal.images[0]}`} />
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
        )
    }
}
