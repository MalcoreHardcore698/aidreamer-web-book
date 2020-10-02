import React from 'react'
import Headline from '../ui/Headline'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Headline</h1>

            <p className="book-paragraph">Default Headline</p>
            <Headline>
                <p>Headline</p>
            </Headline>
        </React.Fragment>
    )
}