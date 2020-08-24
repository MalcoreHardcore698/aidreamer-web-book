import React from 'react'
import Accordion from '../ui/Accordion'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Accordion</h1>

            <p className="book-paragraph">Default Accordion</p>
            <Accordion />
        </React.Fragment>
    )
}