import React from 'react'
import Subscription from '../ui/Subscription'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Subscription</h1>

            <p className="book-paragraph">Default Subscription</p>
            <Subscription />
        </React.Fragment>
    )
}