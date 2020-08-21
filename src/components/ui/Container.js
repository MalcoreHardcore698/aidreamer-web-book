import React from 'react'
import '../styles/Container.css'

export default (props) => {
    const Children = props.children
    
    const classes = [
        'ui-container',
        (props.clear) ? 'clear' : ''
    ]

    return (
        <div className={classes.join(' ')}>
            {Children}
        </div>
    )
}