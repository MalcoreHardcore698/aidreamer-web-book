import React, { useState } from 'react'
import Button from '../ui/Button'
import Modal from '../ui/Modal'

const ArticleEdit = ({ jump }) => {
    return (
        <React.Fragment>
            <p>Article Edit</p>
            <button onClick={() => jump('/gallery')}>Choose Image</button>
        </React.Fragment>
    )
}

const ChooseImage = ({ jump }) => {
    return (
        <React.Fragment>
            <p>Image</p>
            <p>Image</p>
            <p>Image</p>
            <button onClick={() => jump('/gallery/info')}>Here must be information about Image</button>
        </React.Fragment>
    )
}

const InfoImage = () => {
    return (
        <p>Info Image</p>
    )
}

export default () => {
    const [content, setModal] = useState()

    const showModal = (content) => setModal(content)
    const hideModal = () => setModal(null)

    return (
        <React.Fragment>
            <h1 className="book-title">Modal</h1>

            <p className="book-paragraph">Default Modal</p>
            <Button options={{
                type: 'active',
                handler: () => showModal([
                    {
                        path: '/',
                        title: 'Modal Title',
                        component: () => <InfoImage />
                    }
                ])
            }}>
                <p>Default Modal</p>
            </Button>
            
            <p className="book-paragraph">Modal with 3-depths</p>
            <Button options={{
                type: 'active',
                handler: () => showModal([
                    {
                        path: '/',
                        title: 'Article Edit',
                        component: (jump) => <ArticleEdit jump={jump} />
                    },
                    {
                        path: '/gallery',
                        title: 'Choose Image from gallery',
                        component: (jump) => <ChooseImage jump={jump} />
                    },
                    {
                        path: '/gallery/info',
                        title: 'Info Image',
                        component: () => <InfoImage />
                    }
                ])
            }}>
                <p>Modal with many depths</p>
            </Button>

            <Modal options={{
                routes: content, hideModal
            }} />
        </React.Fragment>
    )
}