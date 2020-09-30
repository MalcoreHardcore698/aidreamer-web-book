import React from 'react'
import ListAsync from '../ui/ListAsync'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">ListAsync</h1>

            <p className="book-paragraph">Default ListAsync</p>
            <ListAsync />
        </React.Fragment>
    )
}