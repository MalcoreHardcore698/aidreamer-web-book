import React from 'react'
import TableTrace from './TableTrace'

export default ({ table, setTable }) => {
    return (
        <div className="body">
            {table.map((trace, iter) =>
                <TableTrace key={iter} trace={trace} setTable={setTable} />
            )}
        </div>
    )
}