import React from 'react'
import Main from './components/Main'
import Introduction from './components/Introduction'
import Contents from './components/Contents'
import Story from './components/Story'

import book from './book'
import { parseLink } from './utils/functions'

export default [
    {
        exact: true,
        path: '/',
        component: () => <Main>
            <Introduction />
        </Main>
    },
    {
        exact: true,
        path: '/contents',
        component: () => <Main>
            <Contents />
        </Main>
    },
    ...book
        .map(chapter => chapter.stories)
        .reduce((stories, story) => stories.concat(story), [])
        .map(story => ({
            exact: true,
            path: `/${parseLink(story.title)}`,
            component: () => <Main>
                <Story component={story.component} />
            </Main>
        }))
]