/*
 * COMPONENT: Checkbox
 * 
 * MISSION: ...
 *
**/

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import InputHidden from './InputHidden'
import '../styles/Checkbox.css'

export default ({ options }) => {
    const {
        type,
        name,
        list=[],
        inputRef,
        classNames,
        onChange
    } = options || {}

    const classes = [
        'ui-checkbox',
        classNames, type
    ]

    const [checked, setChecked] = useState([])

    const handlerChecked = (item) => {
        const founded = checked.find(el => el.id === item.id)
        const result = (founded)
            ? checked.filter(el => el !== item)
            : ([ ...checked, item ])

        if (onChange) onChange(result)
        setChecked(result)
    }

    return (
        <div className={classes.join(' ')}>
            <ul className="list">
                {list.map((item, key) =>
                    <li key={key} onClick={() => handlerChecked(item)} className={(checked.find(el => el.id === item.id)) ? 'checked' : 'empty'}>
                        <div className="checkmark">
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <p>{item.title}</p>
                    </li>    
                )}
            </ul>
            <InputHidden name={name} inputRef={inputRef} />
        </div>
    )
}