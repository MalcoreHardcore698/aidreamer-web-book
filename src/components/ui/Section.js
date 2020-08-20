/*
 * COMPONENT: Section
 * 
 * MISSION: ...
 *
**/

import React from 'react'
import Message from './Message'
import Search from './Search'
import Slider from './Slider'
import '../styles/Section.css'

const Manage = ({ filter, targets }) => {
    return (
        <Row>
            <Search filter={filter} />
            <Slider options={{ targets }} />
        </Row>
    )
}

export default (props) => {
    const {
        name='default',
        headline='Section Name',
        manage, filter=false,
        targets=[]
    } = props.options || {}

    const classes = [
        'ui-section',
        name, (manage) ? 'manage' : ''
    ]

    return (
        <section className={classes.join(' ')}>
            <div className="headline">
                <h2>{headline}</h2>
                {(manage) && <Manage
                    filter={filter}
                    targets={targets}
                />}
            </div>
            {(props.children && props.children()) || <Message type="error" />}
        </section>
    )
}