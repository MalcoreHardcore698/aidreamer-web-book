import React from 'react'
import Message from '../ui/Message'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Message</h1>

            <p className="book-paragraph">Default Message</p>
            <Message text="Message" padding />
        </React.Fragment>
    )
}