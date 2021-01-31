import React from 'react'
import './Popular.css'

class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentRecipe: 0,
            meals: props.meals
        }
    }

    createRecipeNav = () => {
        var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        return array.map(
            (value) => {
                return (
                    <div key={value} className="">
                        {value}
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
                            <img src="/00001.png" alt="popular image"></img>
                        </div>
                        <div className="info-container">
                            <div className="title">
                                Patates Topları
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
                            </div>
                            <div className="rating">
                                <div className="star-container">

                                </div>
                                <div className="score">
                                    100/100
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="down-container">
                        {this.createRecipeNav()}
                    </div>
                </div>
                <div className="right-arrow">
                    {">"}
                </div>
            </div>
        )
    }
}

export default Popular