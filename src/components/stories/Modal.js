import React, { useState } from 'react'
import Entry from '../ui/Entry'
import Button from '../ui/Button'
import Modal from '../ui/Modal'
import Message from '../ui/Message'
import Container from '../ui/Container'

const ArticleEdit = ({ jump }) => {
    return (
        <Container>
            <Entry options={{
                statusBar: [
                    { lite: 'May, 16', dark: '14:15 AM' }
                ]
            }}>
                <h2 className="title">Need a teammate</h2>
                <p className="paragraph">Some text for opinion</p>
            </Entry>
            <Button options={{
                state: 'inactive',
                lockdown: true,
                classNames: 'stretch mbs15',
                handler: () => jump('/gallery')
            }}>
                <p>Next</p>
            </Button>
        </Container>
    )
}

const ChooseImage = ({ jump }) => {
    return (
        <Container>
            <Message text="No Content" padding />
            <Button options={{
                state: 'inactive',
                lockdown: true,
                classNames: 'stretch mbs15',
                handler: () => jump('/gallery/info')
            }}>
                <p>Next</p>
            </Button>
        </Container>
    )
}

const InfoImage = () => {
    return (
        <Container>
            <Message text="No Content" padding />
        </Container>
    )
}

export default () => {
    const [state, setModal] = useState()

    const showModal = (state) => setModal(state)
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
                        title: 'Welcome to AidReamer!',
                        component: ({ jump }) => <ArticleEdit jump={jump} />
                    },
                    {
                        path: '/gallery',
                        title: 'Step 1',
                        component: ({ jump }) => <ChooseImage jump={jump} />
                    },
                    {
                        path: '/gallery/info',
                        title: 'Step 2',
                        component: () => <InfoImage />
                    }
                ])
            }}>
                <p>Modal with many depths</p>
            </Button>

            <Modal options={{
                routes: state,
                hideModal
            }} />
        </React.Fragment>
    )
}