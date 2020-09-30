import React from 'react'
import TableMutate from './TableMutate'

export default (props) => (
    <div className="manage">
        <TableMutate del {...props} />
        <TableMutate edit {...props} />
        <TableMutate add {...props} />
    </div>
)