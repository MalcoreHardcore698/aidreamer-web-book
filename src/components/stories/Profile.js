import React from 'react'
import Profile from '../ui/Profile'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Profile</h1>

            <p className="book-paragraph">Default Profile</p>
            <Profile />
        </React.Fragment>
    )
}