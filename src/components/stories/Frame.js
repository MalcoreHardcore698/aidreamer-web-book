import React from 'react'
import Frame from '../ui/Frame'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Frame</h1>

            <p className="book-paragraph">Default Frame</p>
            <Frame value="This is Frame" legend="Act" />
        </React.Fragment>
    )
}