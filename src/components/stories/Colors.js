import React from 'react'
import colors from '../../stores/colors'
import '../styles/Colors.css'

const Palette = ({ colors }) =>
    <ul className="palette">
        {colors.map((color, index) => <Color key={index} color={color} />)}
    </ul>

const Color = ({ color }) =>
    <li className="color">
        <p>{color.components.join(', ')}</p>
        <div
            className="fill"
            style={{ backgroundColor: color.hex }}
        >
        </div>
        <div className="code">
            <span>{color.short.hex}</span>
            <span>{color.hex}</span>
        </div>
    </li>

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Colors</h1>
            <p>Battledraft Style design system color palette</p>

            <Palette colors={colors} />
        </React.Fragment>
    )
}