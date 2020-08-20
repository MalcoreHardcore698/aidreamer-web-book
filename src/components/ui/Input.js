/*
 * COMPONENT: Input
 * 
 * MISSION: ...
 *
**/

import React from 'react'

export default ({ options }) => {
    const {
        type='text',
        placeholder='Write a message...',
        onChange=() => {}
    } = options

    const classes = [
        'ui-input'
    ]

    return (
        <input
            type={type}
            className={classes.join(' ')}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}