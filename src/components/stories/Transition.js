import React from 'react'
import Transition from '../ui/Transition'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Transition</h1>

            <p className="book-paragraph">Default Transition</p>
            <Transition />
        </React.Fragment>
    )
}