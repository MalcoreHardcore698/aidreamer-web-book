import React, { useState } from 'react'
import Act from '../ui/Act'
import ActTask from '../ui/ActTask'
import Container from '../ui/Container'
import Modal from '../ui/Modal'

const act = {
    act: {
        id: 0,
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
            task: {
                id: 0
            },
            status: 'COMPLETED'
        },
        {
            task: {
                id: 1
            },
            status: 'WAITING'
        }
    ]
}

export default () => {
    const [state, setModal] = useState()
    
    const showModal = (state) => setModal(state)
    const hideModal = () => setModal(null)

    const handleTask = (task) => {
        showModal([
            {
                path: '/',
                title: task.title,
                component: () => (
                    <Container>
                        <ActTask task={task} />
                    </Container>
                )
            }
        ], true)
    }

    return (
        <React.Fragment>
            <h1 className="book-title">Act</h1>

            <p className="book-paragraph">Default Act</p>
            <Act act={act} onChange={handleTask} />

            <Modal options={{
                routes: state,
                hideModal
            }} />
        </React.Fragment>
    )
}