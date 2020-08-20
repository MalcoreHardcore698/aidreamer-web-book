/*
 * COMPONENT: Notify
 * 
 * MISSION: ...
 *
**/

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCheck,
    faExclamationTriangle,
    faTimes
} from '@fortawesome/free-solid-svg-icons'
import '../styles/Notify.css'

export default ({ options }) => {
    const {
        // admin, client
        area,
        type,
        avatar,
        message
    } = options

    const classes = [
        'ui-notify',
        area, type
    ]

    const getIcon = () => {
        switch (type) {
            case 'success':
                return faCheck
            
            case 'warning':
                return faExclamationTriangle
                    
            case 'error':
                return faTimes
        }
    }

    const renderMedia = () => {
        switch (area) {
            case 'admin':
                return <FontAwesomeIcon icon={getIcon()} />
            default:
                return <img src={avatar} alt="Avatar" />
        }
    }

    const renderMessage = () => {
        return <p>{message}</p>
    }

    return (
        <div className={classes.join(' ')}>
            {renderMedia()}
            {renderMessage()}
        </div>
    )
}