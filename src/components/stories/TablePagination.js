import React from 'react'
import TablePagination from '../ui/TablePagination'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">TablePagination</h1>

            <p className="book-paragraph">Default TablePagination</p>
            <TablePagination />
        </React.Fragment>
    )
}