import React from 'react'
import Slider from '../ui/Slider'
import '../styles/Slider.css'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Slider</h1>

            <p className="book-paragraph">Default Slider</p>
            <Slider options={{
                defaultValue: 5
            }} />

            <p className="book-paragraph">Slider with dots</p>
            <Slider options={{
                step: 15,
                dots: true,
                defaultValue: 25
            }} />

            <p className="book-paragraph">Inactive Slider with points</p>
            <Slider options={{
                disabled: true,
                defaultValue: 75
            }} />

            <p className="book-paragraph">Range Slider</p>
            <Slider type="range" options={{
                defaultValue: [55, 75]
            }} />

            <p className="book-paragraph">Range Slider with dots</p>
            <Slider type="range" options={{
                step: 25,
                dots: true,
                defaultValue: [15, 65]
            }} />

            <p className="book-paragraph">Range Inactive Slider with points</p>
            <Slider type="range"  options={{
                disabled: true,
                defaultValue: [65, 95]
            }} />
        </React.Fragment>
    )
}