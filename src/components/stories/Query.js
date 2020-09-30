import React from 'react'
import Query from '../ui/Query'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Query</h1>

            <p className="book-paragraph">Default Query</p>
            <Query />
        </React.Fragment>
    )
}