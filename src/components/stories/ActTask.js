import React from 'react'
import ActTask from '../ui/ActTask'

const act = {
    act: {
        title: 'Act I',
        tasks: [
            {
                id: 0,
                title: 'Unicorn Destroyer',
                icon: {
                    path: ''
                },
                translation: 'Join any hub',
                awards: [
                    { id: 0, award: 'EXP', quantity: 15 }
                ]
            },
            {
                id: 1,
                title: 'Good Founder',
                icon: {
                    path: ''
                },
                translation: 'Add more then 3 post bt any hub',
                awards: [
                    { id: 0, award: 'EXP', quantity: 25 },
                    { id: 1, award: 'GEM', quantity: 5 }
                ]
            }
        ]
    },
    tasks: [
        {
            id: 0,
            status: 'COMPLETED'
        },
        {
            id: 1,
            status: 'WAITING'
        }
    ]
}

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">ActTask</h1>

            <p className="book-paragraph">Default ActTask</p>
            <ActTask act={act} />
        </React.Fragment>
    )
}