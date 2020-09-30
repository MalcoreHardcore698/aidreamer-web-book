import React from 'react'
import TableHeader from '../ui/TableHeader'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">TableHeader</h1>

            <p className="book-paragraph">Default TableHeader</p>
            <TableHeader />
        </React.Fragment>
    )
}