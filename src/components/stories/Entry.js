import React from 'react'
import Entry from '../ui/Entry'
import '../styles/Entry.css'

import ImageAvatar from '../../assets/images/avatar.png'
import ImageArticle from '../../assets/images/article.png'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Entry</h1>

            <p className="book-paragraph">This root component for rendering entries such as Offer, Article or Tour. So below displayed Offer Entry</p>
            <Entry options={{
                userBar: {
                    name: 'noctua',
                    status: 'online',
                    avatar: ImageAvatar
                },
                statusBar: [
                    { lite: 'May, 16', dark: '14:15 AM' }
                ]
            }}>
                <h2 className="title">Need a teammate</h2>
            </Entry>

            <p className="book-paragraph">Editable Entry with description</p>
            <Entry options={{
                editable: true,
                statusBar: [
                    { lite: 'May, 16', dark: '14:15 AM' }
                ]
            }}>
                <h2 className="title">Need a teammate</h2>
                <p className="paragraph">Some text for opinion</p>
            </Entry>

            <p className="book-paragraph">Article Entry</p>
            <Entry options={{
                userBar: {
                    name: 'noctua',
                    status: 'online',
                    avatar: ImageAvatar
                },
                statusBar: [
                    { lite: 'Comments', dark: '47' },
                    { lite: 'Views', dark: '13,541' },
                    { lite: 'May, 16', dark: '14:15 AM' }
                ]
            }}>
                <img className="image" src={ImageArticle} alt="Article" />
                <h2 className="title">Need a teammate</h2>
                <p className="paragraph">Some text for opinion</p>
            </Entry>
        </React.Fragment>
    )
}