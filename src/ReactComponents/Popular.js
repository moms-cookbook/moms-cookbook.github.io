import React from 'react'
import './Popular.css'

class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentRecipe: 0,
            popularMeals:[],
            popularMeal: {images:[0], title:''}
        }
        this.getPopularMeals()
    }

    getPopularMeals = () => {
        var xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () => {
            var obj = JSON.parse(xhr.responseText)
            this.setState({popularMeals: obj.popularMeals, popularMeal: obj.popularMeals[0]})
        })
        xhr.open('GET', 'http://192.168.1.4:3001/popularMeals')
        xhr.send();
    }

    createRecipeNav = () => {
        return this.state.popularMeals.map(
            (value, i) => {
                return (
                    <div key={i} className="popular-recipe-index" onClick={() => { this.setState({popularMeal: value}); }}>
                        {i}
                    </div>
                )
            }
        )
    }

    render() {
        return (
            <div className="popular-container">
                <div className="left-arrow">
                    {"<"}
                </div>
                <div className="middle-container">
                    <div className="up-container">
                        <div className="image-container">
                            <img src={`/${this.state.popularMeal.images[0]}`} alt="popular recipe image"></img>
                        </div>
                        <div className="info-container">
                            <div className="title">
                                {this.state.popularMeal.title}
                            </div>
                            <div className="cook">
                                <div className="image">
                                    <img alt="user image" src="/00002.jpeg"></img>
                                </div>
                                <div className="name">

                                    <div className="name-think">
                                        Reyyan
                                    </div>
                                </div>
                                <div className="rating">
                                    <div className="star-container">

                                    </div>
                                    <div className="score">
                                        100/100
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="nothing">
                                fdzhdzfh
                            </div>
                        </div>
                    </div>
                    <div className="down-container">
                        {this.createRecipeNav()}
                    </div>
                </div>-
                <div className="right-arrow">
                    {">"}
                </div>
            </div>
        )
    }
}

export default Popular