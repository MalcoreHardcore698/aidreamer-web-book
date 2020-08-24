import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faPaperPlane, faTrophy, faBell, faCog } from '@fortawesome/free-solid-svg-icons'
import Navigation from '../ui/Navigation'
import Container from '../ui/Container'
import Message from '../ui/Message'
import Modal from '../ui/Modal'

import ImageAvatar from '../../assets/images/avatar.png'
import ImageLogo from '../../assets/images/logo.svg'

const links = [
    {
        path: '/profile',
        component: <img src={ImageAvatar} alt="Avatar" />
    },
    {
        path: '/',
        component: <img src={ImageLogo} alt="Logo" />
    },
    {
        path: '/navigator',
        component: <FontAwesomeIcon icon={faCompass} />
    },
    {
        path: '/tours',
        component: <FontAwesomeIcon icon={faTrophy} />
    },
    {
        path: '/chats',
        component: <FontAwesomeIcon icon={faPaperPlane} />
    }
]

const routes = [
    {
        path: '/',
        title: 'Modal Title',
        component: () => <InfoImage />
    }
]

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
    
    function getButton(handler, routes, icon) {
        return ({
            options: {
                type: 'large-round',
                handler: () => handler(routes)
            },
            component: <FontAwesomeIcon icon={icon} />
        })
    }

    return (
        <React.Fragment>
            <h1 className="book-title">Navigation</h1>

            <p className="book-paragraph">Default Navigation</p>
            <Navigation options={{
                links, buttons: [
                    getButton(showModal, routes, faBell),
                    getButton(showModal, routes, faCog)
                ]
            }} />

            <Modal options={{
                routes: state,
                hideModal
            }} />
        </React.Fragment>
    )
}