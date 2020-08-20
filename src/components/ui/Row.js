/*
 * COMPONENT: Row
 * 
 * MISSION: ...
 *
**/

import React from 'react'
import '../styles/Row.css'

export default (props) => {
    const Children = props.children
    return (
        <div className="ui-row">
            {Children}
        </div>
    )
}