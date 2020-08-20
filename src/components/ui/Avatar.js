import React from 'react'
import Skeleton from './Skeleton'
import '../styles/Avatar.css'

export default ({ avatar, properties=[] }) => {
    const classes = [
        'ui-avatar',
        ...properties
    ]

    if (!avatar) return <Skeleton component="avatar" />

    return (
        <div className={classes.join(' ')}>
            <img src={avatar.path} alt="Avatar" />
        </div>
    )
}