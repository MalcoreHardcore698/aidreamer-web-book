import React from 'react'
import Skeleton from '../ui/Skeleton'
import '../styles/Skeleton.css'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Skeleton</h1>

            <p className="book-paragraph">Input Skeleton</p>
            <Skeleton
                component="input"
                options={{
                    width: '480px',
                    height: '40px'
                }}
            />

            <p className="book-paragraph">Entry Skeleton</p>
            <Skeleton
                component="entry"
                options={{
                    width: '480px',
                    height: '280px'
                }}
            />
        </React.Fragment>
    )
}