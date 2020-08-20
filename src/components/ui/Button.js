import React from 'react'
import '../styles/Button.css'

export default (props) => {
    const Children = props.children

    const {
        type,
        handler=(e) => { e.preventDefault() },
    } = props.options || {}

    const classes = [
        'ui-button',
        type
    ]

    return (
        <button
            className={classes.join(' ')}
            onClick={handler}
        >
            {Children}
        </button>
    )
}