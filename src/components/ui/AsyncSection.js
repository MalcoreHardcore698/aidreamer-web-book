import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkull } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import Skeleton from './Skeleton'
import Message from './Message'

import '../styles/Section.css'

const Query = ({ query, variables, component }) => {
    const { loading, error, data } = useQuery(query, { variables })

    const renderContent = () => component && component(data)

    if (loading) return <Skeleton component="section" />
    if (error) return <Message type="error" />

    return renderContent()
}

export default (props) => {
    const {
        name='default',
        icon=faSkull,
        headline='Section Name',
        alignment,
        query=null,
        variables={},
        link=null
    } = props.options || {}

    const classes = [
        'ui-section',
        name, alignment
    ]

    const data = 'Content'

    const renderLink = () => {
        if (!link) return null
        return <a
            href={link.path}
            className={`link${link.classes.join(' ')}`}
        >
                {link.text}
        </a>
    }

    if (query) return <Query
        query={query}
        variables={variables}
        component={props.children}
    />

    return (
        <section className={classes.join(' ')}>
            <div className={`headline${(link) ? ' with-link' : ''}`}>
                <h2><FontAwesomeIcon icon={icon} />{headline}</h2>
                {renderLink()}
            </div>
            {props.children && props.children(data)}
        </section>
    )
}