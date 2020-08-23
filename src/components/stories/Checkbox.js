import React, { useState } from 'react'
import Checkbox from '../ui/Checkbox'

export default () => {
    const [items, setItems] = useState([
        { id: 0, value: 'Item 1', checked: true },
        { id: 1, value: 'Item 2', checked: false },
        { id: 2, value: 'Item 3', checked: true }
    ])

    return (
        <React.Fragment>
            <h1 className="book-title">Checkbox</h1>

            <p className="book-paragraph">Default Checkbox</p>
            <Checkbox options={{
                list: items,
                handler: setItems
            }} />
        </React.Fragment>
    )
}