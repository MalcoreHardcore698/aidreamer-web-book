import React, { useState } from 'react'
import Radiobox from '../ui/Radiobox'

export default () => {
    const [items, setItems] = useState([
        { id: 0, value: 'Item 1', checked: false },
        { id: 1, value: 'Item 2', checked: false },
        { id: 2, value: 'Item 3', checked: false },
        { id: 3, value: 'Item 4', checked: false },
        { id: 4, value: 'Item 5', checked: false },
        { id: 5, value: 'Item 6', checked: true },
        { id: 6, value: 'Item 7', checked: false }
    ])

    return (
        <React.Fragment>
            <h1 className="book-title">Radiobox</h1>

            <p className="book-paragraph">Default Radiobox</p>
            <Radiobox options={{
                list: items,
                handler: setItems
            }} />
        </React.Fragment>
    )
}