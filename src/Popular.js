import React from 'react'
import './Popular.css'

class Popular extends React.Component {
    render() {
        return (
            <div className="popular">
                <div className="image">
                    <img alt="popular" src="/00001.png"/>
                </div>
                <div className="image-about">
                    <h1>Patates Topları</h1>
                </div>
            </div>
        )
    }
}

export default Popular