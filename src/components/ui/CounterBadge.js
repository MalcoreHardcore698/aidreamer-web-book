/*
 * COMPONENT: CounterBadge
 * 
 * MISSION: Rendering number into circle/oval
 *
**/

import React from 'react'

export default ({ type, color, count }) => {
    const classes = [
        'ui-counter-badge',
        type, color='default'
    ]

    return (
        <span className={classes.join(' ')}>{count}</span>
    )
}