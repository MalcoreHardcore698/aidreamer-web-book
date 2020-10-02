import React from 'react'
import ActTask from '../ui/ActTask'

const task = {
    id: 0,
    title: 'Unicorn Destroyer',
    icon: {
        path: ''
    },
    translation: 'Join any hub',
    awards: [
        { id: 0, award: 'EXP', quantity: 15 }
    ]
}

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">ActTask</h1>

            <p className="book-paragraph">Default ActTask</p>
            <ActTask task={task} />
        </React.Fragment>
    )
}