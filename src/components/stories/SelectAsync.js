import React from 'react'
import SelectAsync from '../ui/SelectAsync'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">SelectAsync</h1>

            <p className="book-paragraph">Default SelectAsync</p>
            <SelectAsync />
        </React.Fragment>
    )
}