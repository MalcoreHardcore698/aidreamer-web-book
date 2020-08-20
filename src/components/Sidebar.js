import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo-color.svg'
import { parseLink } from '../utils/functions'

const Chapter = ({ chapter }) => {
    return (
        <div className="chapter">
            <h2 className="title">{chapter.title}</h2>
            <Stories stories={chapter.stories} />
        </div>
    )
}

const Stories = ({ stories }) => {
    return (
        <ul className="stories">
            {stories.map((story, key) =>
                <Story key={key} story={story} />)}
        </ul>
    )
}

const Story = ({ story }) => {
    return (
        <li className="story">
            <NavLink to={`/${parseLink(story.title)}`} activeclass="active">
                {story.title}
            </NavLink>
        </li>
    )
}

export default ({ book }) => {
    return (
        <aside className="book-sidebar">
            <div className="logo book-block">
                <NavLink to="/">
                    <img src={Logo} alt="Logo" />
                </NavLink>
            </div>

            {book.map((chapter, key) =>
                <Chapter key={key} chapter={chapter} />
            )}
        </aside>
    )
}