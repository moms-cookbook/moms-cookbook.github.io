import React, { Component } from 'react'
import './RecipeBox.css'
import Recipe from './RecipeComponent'

class RecipeBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            Meals : <></>
        }
    }
    async componentDidMount() {
        this.boxfunc()
    }
    async boxfunc(){
        var Meals = await this.getRecipes(10);
        console.log(Meals);
        this.setState({Meals:Meals.map(
            (meal, index) => {
                return <Recipe key={index} mealkey={meal._id} ingredients={meal.ingredients} text={meal.title} image={meal.images[0]}/>
            }
        )})
    }
    async getRecipes(count) {

        var data = await fetch('http://192.168.1.106:3001/recipes/' + count).then(response=>response.json());
        return data;
    }

    render() {
        return (
            <div className="recipebox-container">
                {
                    this.state.Meals
                }
            </div>
        )
    }
}
export default RecipeBox