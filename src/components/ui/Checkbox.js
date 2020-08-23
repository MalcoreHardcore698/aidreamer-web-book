/*
 * COMPONENT: Checkbox
 * 
 * MISSION: ...
 *
**/

import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import '../styles/Checkbox.css'

export default ({ options }) => {
    const {
        type,
        list=[],
        handler
    } = options || {}

    const classes = [
        'ui-checkbox',
        type
    ]

    const [checked, setChecked] = useState(list)

    const handlerChecked = (item) => {
        setChecked(checked.map(el => (el.id === item.id)
            ? ({
                ...el,
                checked: !el.checked
            }) : ({
                ...el
            })))
    }

    useEffect(() => {
        handler(checked)
    }, [handler, checked])

    return (
        <ul className={classes.join(' ')}>
            {checked.map((item, key) =>
                <li key={key} onClick={() => handlerChecked(item)} className={(item.checked) ? 'checked' : 'empty'}>
                    <div className="checkmark">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <p>{item.value}</p>
                </li>    
            )}
        </ul>
    )
}