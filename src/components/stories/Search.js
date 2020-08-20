import React from 'react'
import Search from '../ui/Search'
import '../styles/Search.css'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Search</h1>

            <p className="book-paragraph">Search without Filter</p>
            <Search />

            <p className="book-paragraph">Search with Filter</p>
            <Search filter />
        </React.Fragment>
    )
}