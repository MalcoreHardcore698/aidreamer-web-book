import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import Message from './Message'
import Button from './Button'

const Manage = () => {
    return (
        <div className="manage">
            <Button options={{ type: 'icon' }}>
                <FontAwesomeIcon icon={faPen} />
            </Button>
            <Button options={{ type: 'icon' }}>
                <FontAwesomeIcon icon={faTrash} />
            </Button>
        </div>
    )
}

export default (props) => {
    const Children = props.children

    const {
        capacious=true,
        editable,
        userBar,
        statusBar
    } = props.options || {}

    const classes = [
        'ui-entry',
        (capacious) ? 'capacious' : ''
    ]

    const renderUserBar = () => {
        if (!userBar)
            return

        return (
            <div className="user-bar">
                <img className="avatar" src={userBar.avatar} alt="Avatar" />
                <p className="content">
                    <span className="name">{userBar.name}</span>
                    <span className="status">{userBar.status}</span>
                </p>
            </div>
        )
    }

    const renderContent = () => {
        return (
            <div className="content-wrapper">
                {(!Children)
                    ? <Message text="No Content" />
                    : <React.Fragment>
                        <div className="content">{Children}</div>
                        {(editable) && <Manage />}
                    </React.Fragment>
                }
            </div>
        )
    }

    const renderStatusBar = () => {
        if (!statusBar)
            return
        
        return (
            <div className="status-bar">
                {statusBar.map((item, key) =>
                    <p key={key}>
                        <span className="lite">{item.lite}</span>
                        <span className="dark">{item.dark}</span>
                    </p>
                )}
            </div>
        )
    }
    
    return (
        <div className={classes.join(' ')}>
            {renderUserBar()}
            {renderContent()}
            {renderStatusBar()}
        </div>
    )
}