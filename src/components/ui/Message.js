/*
 * COMPONENT: Message
 * 
 * MISSION: ...
 *
**/

import React from 'react'

import '../styles/Message.css'

export default ({ text }) => {
    return <p className="ui-message">{text}</p>
}