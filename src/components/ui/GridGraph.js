/*
 * COMPONENT: Graph
 * 
 * MISSION: ...
 *
**/

import React from 'react'
import Match from './GridMatch'

export default ({ input='empty', output='empty', participants, alone }) => {
    return (
        <div className={`graph ${input} ${output}`}>
            <Match participants={participants} alone={alone} />
        </div>
    )
}