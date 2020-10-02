import React, { useState } from 'react'
import Table from '../ui/Table'
import FormPost from '../forms/Post'
import Modal from '../ui/Modal'
import '../styles/Table.css'

const data = [
    {
        id: 0,
        preview: { path: '' },
        title: 'Title',
        subtitle: 'Subtitle',
        description: 'Description',
        content: 'Content',
        comments: [0, 1, 2],
        hub: { title: 'Hub Title' },
        status: 'PUBLISHED',
        updatedAt: Date.now(),
        createdAt: Date.now()
    }
]

export default () => {
    const [state, setModal] = useState()
    
    const showModal = (state) => setModal(state)
    const hideModal = () => setModal(null)
    
    return (
        <React.Fragment>
            <h1 className="book-title">Table</h1>

            <Table
                data={data}
                component={{
                    render: FormPost,
                    fields: {
                        isTitle: true,
                        isSubtitle: true,
                        isDescription: true,
                        isContent: true,
                        isHub: true,
                        isPreview: true,
                        isStatus: true
                    }
                }}
                showModal={showModal}
            />

            <Modal options={{
                routes: state,
                hideModal
            }} />
        </React.Fragment>
    )
}