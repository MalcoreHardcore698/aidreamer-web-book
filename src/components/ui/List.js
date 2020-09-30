/*
 * COMPONENT: List
 * 
 * MISSION: ...
 *
**/

import React from 'react'
import InputHidden from './InputHidden'
import '../styles/List.css'

export default (props) => {
    const Children = props.children

    const {
        type,
        name,
        list,
        inputRef,
        onChangeItem,
        onChangeList,
    } = props.options || {}

    const classes = [
        'ui-list', type,
        (onChangeList) ? ' clickable' : ''
    ].filter(c => c)

    const [checked, setChecked] = useState(null)

    const handlerChecked = (item) => {
        if (onChangeItem) onChangeItem(item)
        setChecked(item)
    }

    return (
        <div
            className={classes.join(' ')}
            onClick={() => (onChangeList) && onChangeList()}
        >
            {list.map((item, key) => (
                <div
                    key={key}
                    className={`ui-item${(checked === item) ? ' checked' : ''}`}
                    onClick={() => handlerChecked(item)}
                >
                    <Children item={item} />
                </div>
            ))}

            <InputHidden name={name} inputRef={inputRef} />
        </div>
    )
}