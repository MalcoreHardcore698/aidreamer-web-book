import React from 'react'
import '../styles/Slider.css'

export default ({ options }) => {
    const {
        type,
        points,
        state,
        color,
    } = options || {}

    const classes = [
        'ui-slider',
        type, color,
        state
    ]

    const renderPoints = () => {
        const pts = []
        for (let key = 0; key < points; key++) {
            pts.push(<span key={key} className="point"></span>)
        }
        return pts.map(pt => pt)
    }

    const handlerDragStart = (e) => {

    }

    const handlerDragMove = (e) => {
        
    }

    const handlerDragEnd = (e) => {
        
    }

    return (
        <div className={classes.join(' ')}>
            <div className="scale"></div>
            <div className="points">
                {renderPoints()}
            </div>
            <div
                className="toggle"
                onDragStart={handlerDragStart}
                onDragMove={handlerDragMove}
                onDragEnd={handlerDragEnd}
            >
                <span></span>
            </div>
        </div>
    )
}