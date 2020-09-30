/*
 * COMPONENT: Checkbox
 * 
 * MISSION: ...
 *
**/

import React, { useState } from 'react'
import InputHidden from './InputHidden'
import '../styles/Radiobox.css'

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
        'ui-radiobox',
        classNames, type
    ]

    const [checked, setChecked] = useState(null)

    const handlerChecked = (item) => {
        if (onChange) onChange(item)
        setChecked(item)
    }

    return (
        <div className={classes.join(' ')}>
            <ul className="list">
                {list.map((item, key) =>
                    <li key={key} onClick={() => handlerChecked(item)} className={(item === checked) ? 'checked' : 'empty'}>
                        <div className="checkmark"><span></span></div>
                        <p>{item}</p>
                    </li>    
                )}
            </ul>
            <InputHidden name={name} inputRef={inputRef} />
        </div>
    )
}