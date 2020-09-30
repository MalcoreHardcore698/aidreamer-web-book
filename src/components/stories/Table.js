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

const columns = data.map(document => ([
    {
        header: 'ID',
        value: document.id,
        type: 'text',
        visible: false
    },
    {
        header: 'Изображение',
        value: document.preview.path,
        type: 'img',
        visible: false
    },
    {
        header: 'Заголовок',
        value: document.title,
        type: 'text'
    },
    {
        header: 'Подзаголовок',
        value: document.subtitle,
        type: 'text',
        visible: false
    },
    {
        header: 'Описание',
        value: document.description,
        type: 'text',
        visible: false
    },
    {
        header: 'Содержимое',
        value: document.content,
        type: 'text'
    },
    {
        header: 'Комментарии',
        value: document.comments.length,
        type: 'text'
    },
    {
        header: 'Сообщество',
        value: document.hub.title,
        type: 'text'
    },
    {
        header: 'Статус',
        value: document.status,
        type: 'text'
    },
    {
        header: 'Дата изменения',
        value: {
            date: document.updatedAt,
            format: 'DD.MM.YYYY'
        }
    },
    {
        header: 'Дата создания',
        value: {
            date: document.createdAt,
            format: 'DD.MM.YYYY'
        }
    }
]))

export default () => {
    const [state, setModal] = useState()
    
    const showModal = (state) => setModal(state)
    const hideModal = () => setModal(null)
    
    return (
        <React.Fragment>
            <h1 className="book-title">Table</h1>

            <Table
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
                data={data}
                columns={columns}
                showModal={showModal}
            />

            <Modal options={{
                routes: state,
                hideModal
            }} />
        </React.Fragment>
    )
}