/*
 * COMPONENT: TextArea
 * 
 * MISSION: ...
 *
**/

import React from 'react'

export default ({ options }) => {
    const {
        placeholder='Write a message...',
        onChange=() => {}
    } = options

    const classes = [
        'ui-textarea'
    ]

    return (
        <textarea className={classes.join(' ')}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}