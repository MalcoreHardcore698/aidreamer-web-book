/*
 * COMPONENT: Dropdown
 * 
 * MISSION: ...
 * IMPORTANT: Parent component must be 'relative' position
 *
**/

import React from 'react'
import List from './List'

export default ({ options }) => {
    const {
        type='',
        list={}
    } = options

    const classes = [
        'ui-dropdown',
        type
    ]

    return (
        <div className={classes.join(' ')}>
            <List options={{ ...list }} />
        </div>
    )
}