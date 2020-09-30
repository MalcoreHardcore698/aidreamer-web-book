import React from 'react'
import TogglerAsync from '../ui/TogglerAsync'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">TogglerAsync</h1>

            <p className="book-paragraph">Default TogglerAsync</p>
            <TogglerAsync />
        </React.Fragment>
    )
}