import React from 'react'
import TextArea from '../ui/TextArea'
import '../styles/TextArea.css'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">TextArea</h1>

            <p className="book-paragraph">Default TextArea</p>
            <TextArea options={{
                placeholder: 'Write a message'
            }} />
        </React.Fragment>
    )
}