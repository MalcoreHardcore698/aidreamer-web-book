import React from 'react'
import Slider from '../ui/Slider'
import '../styles/Slider.css'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Slider</h1>

            <p className="book-paragraph">Default Slider</p>
            <Slider />

            <p className="book-paragraph">Slider with points</p>
            <Slider options={{
                points: 5,
                state: 'active'
            }} />

            <p className="book-paragraph">Inactive Slider with points</p>
            <Slider options={{
                points: 5,
                state: 'inactive'
            }} />
        </React.Fragment>
    )
}