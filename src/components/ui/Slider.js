/*
 * COMPONENT: Slider
 * 
 * MISSION: ...
 *
**/

import React, { useState } from 'react'
import '../styles/Slider.css'

export default ({ options }) => {
    const {
        state=null,
        handler=null,
        targets
    } = options

    const classes = [
        'ui-slider'
    ]

    const [current, setCurrent] = useState(targets[0].type)
    const handlerState = (target) => {
        setCurrent(target)
    }

    return (
        <div className={classes.join(' ')}>
            {targets.map(target =>
                <p
                    className={`slide${(target.type === current) ? ' active' : ''}`}
                    onClick={() => (state && handler)
                        ? handler
                        : handlerState(target.type)
                    }
                >
                    {target.value}
                </p>    
            )}
        </div>
    )
}