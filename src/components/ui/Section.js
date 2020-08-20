import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkull } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import Message from './Message'

import '../styles/Section.css'

export default (props) => {
    const {
        name='default',
        icon=faSkull,
        headline='Section Name',
        alignment,
        link=null
    } = props.options || {}

    const classes = [
        'ui-section',
        name, alignment
    ]

    const renderLink = () => {
        if (!link) return null
        return <a
            href={link.path}
            className={`link${link.classes.join(' ')}`}
        >
                {link.text}
        </a>
    }

    return (
        <section className={classes.join(' ')}>
            <div className={`headline${(link) ? ' with-link' : ''}`}>
                <h2><FontAwesomeIcon icon={icon} />{headline}</h2>
                {renderLink()}
            </div>
            {(props.children && props.children()) || <Message type="error" />}
        </section>
    )
}