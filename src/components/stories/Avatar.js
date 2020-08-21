import React from 'react'
import Row from '../ui/Row'
import Avatar from '../ui/Avatar'
import '../styles/Avatar.css'
import ImageAvatar from '../../assets/images/avatar.png'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Avatar</h1>

            <p className="book-paragraph">Default Avatar</p>
            <Row>
                <Avatar
                    avatar={{
                        path: ImageAvatar
                    }}
                    properties={['x256']}
                />
                <Avatar
                    avatar={{
                        path: ImageAvatar
                    }}
                    properties={['x128']}
                />
                <Avatar
                    avatar={{
                        path: ImageAvatar
                    }}
                    properties={['x64']}
                />
                <Avatar
                    avatar={{
                        path: ImageAvatar
                    }}
                />
            </Row>

            <p className="book-paragraph">Circle Avatar</p>
            <Row>
                <Avatar
                    avatar={{
                        path: ImageAvatar
                    }}
                    properties={['x256', 'circle']}
                />
                <Avatar
                    avatar={{
                        path: ImageAvatar
                    }}
                    properties={['x128', 'circle']}
                />
                <Avatar
                    avatar={{
                        path: ImageAvatar
                    }}
                    properties={['x64', 'circle']}
                />
                <Avatar
                    avatar={{
                        path: ImageAvatar
                    }}
                    properties={['circle']}
                />
            </Row>
        </React.Fragment>
    )
}