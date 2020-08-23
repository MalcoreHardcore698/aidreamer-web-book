import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPen,
    faPlus,
    faTrash
} from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import Table from '../ui/Table'
import Modal from '../ui/Modal'
import Container from '../ui/Container'
import Entry from '../ui/Entry'
import Row from '../ui/Row'
import Button from '../ui/Button'
import Message from '../ui/Message'
import { setDocuments } from '../../utils/actions'
import users from '../../stores/users'
import '../styles/Table.css'

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

const Alert = ({ close }) => {
    const state = useSelector(state => state)

    return (
        <Container>
            <Message text={`Will be delete ${state.documents.length} documents`} padding />
            <Row type="flex">
                <Button options={{
                    state: 'inactive',
                    classNames: 'grow',
                    handler: close
                }}>
                    <p>No</p>
                </Button>
                <Button options={{
                    state: 'inactive',
                    classNames: 'grow',
                    handler: close
                }}>
                    <p>Yes</p>
                </Button>
            </Row>
        </Container>
    )
}

export default () => {
    const [state, setModal] = useState()
    const dispatch = useDispatch()
    
    const showModal = (state) => setModal(state)
    const hideModal = () => setModal(null)
    
    return (
        <React.Fragment>
            <h1 className="book-title">Table</h1>

            <Table options={{
                data: users.map(user => ([
                    { header: 'ID', value: user.id, type: 'text', visible: false },
                    { header: 'Аватар', value: user.avatar.path, type: 'img' },
                    { header: 'Имя', value: user.name, type: 'text' },
                    { header: 'Пароль', value: user.password, type: 'text' },
                    { header: 'Email', value: user.email, type: 'text' },
                    { header: 'Телефон', value: user.phone, type: 'text' },
                    { header: 'Роль', value: user.role, type: 'text' },
                    { header: 'Баланс', value: user.balance, type: 'text' },
                    { header: 'Дата последнего входа', value: user.dateLastAuth, type: 'text', visible: false },
                    { header: 'Дата регистрации', value: user.dateRegistration, type: 'twxt', visible: false },
                    { header: 'Подтвержден Email', value: user.isVerifiedEmail, type: 'text', visible: false },
                    { header: 'Подтвержден телефон', value: user.isVerifiedPhone, type: 'text', visible: false },
                    { header: 'Включены уведомления', value: user.isNotified, type: 'text', visible: false }
                ])),
                actions: [
                    ({ table, dishands }) => (
                        <Button options={{
                            type: 'icon',
                            state: (dishands) ? 'disable' : 'active',
                            disabled: dishands,
                            classNames: 'stretch',
                            handler: () => {
                                dispatch(setDocuments(table.filter(t => t.checked)))
                                showModal([
                                    {
                                        path: '/',
                                        title: 'Are you sure you want to delete this document?',
                                        component: ({ close }) => <Alert close={close} />
                                    }
                                ])
                            }
                        }}>
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                    ),
                    ({ dishands }) => (
                        <Button options={{
                            type: 'icon',
                            state: (dishands) ? 'disable' : 'active',
                            disabled: dishands,
                            classNames: 'stretch',
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
                            <FontAwesomeIcon icon={faPen} />
                        </Button>
                    ),
                    ({ dishands }) => (
                        <Button options={{
                            type: 'icon',
                            state: (dishands) ? 'disable' : 'active',
                            disabled: dishands,
                            classNames: 'stretch',
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
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    )
                ]
            }} />

            <Modal options={{
                routes: state,
                hideModal
            }} />
        </React.Fragment>
    )
}