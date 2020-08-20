/*
 * COMPONENT: Button
 * 
 * MISSION: Rendering Image with given properties
 *
**/

import React from 'react'
import Ripples from 'react-ripples'
import '../styles/Button.css'

const Button = ({ child, classes, handler }) => {
    return (
        <button
            className={classes.join(' ')}
            onClick={handler}
        >
            {child}
        </button>
    )
}

const Ripple = ({ child, classes, handler }) => {
    return (
        <Ripples color="var(--color-graylite)" during={1000}>
            <Button child={child} classes={classes} handler={handler} />
        </Ripples>
    )
}

export default (props) => {
    const Children = props.children

    const {
        type, state,
        handler=(e) => { e.preventDefault() },
    } = props.options || {}

    const classes = [
        'ui-button',
        type, state
    ]

    const options = {
        child: Children,
        classes, handler
    }

    if (state !== 'inactive')
        return <Ripple {...options} />

    return <Button {...options} />
}