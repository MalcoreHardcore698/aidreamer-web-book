import React from 'react'
import Alert from '../ui/Alert'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Alert</h1>

            <p className="book-paragraph">Error Alert</p>
            <Alert type="error" message="Error Message" />

            <p className="book-paragraph">Warning Alert</p>
            <Alert type="warning" message="Warning Message" />

            <p className="book-paragraph">Success Alert</p>
            <Alert type="success" message="Success Message" />
        </React.Fragment>
    )
}