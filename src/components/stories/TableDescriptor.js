import React from 'react'
import TableDescriptor from '../ui/TableDescriptor'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">TableDescriptor</h1>

            <p className="book-paragraph">Default TableDescriptor</p>
            <TableDescriptor />
        </React.Fragment>
    )
}