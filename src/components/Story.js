import React from 'react'

export default ({ component }) => {
    const Component = component
    return (
        <div className="book-story">
            <Component />
        </div>
    )
}