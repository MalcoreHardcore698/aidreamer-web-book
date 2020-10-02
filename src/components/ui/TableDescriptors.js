import React from 'react'
import { faEye, faFilter } from '@fortawesome/free-solid-svg-icons'
import TableDescriptor from './TableDescriptor'
import Search from './Search'
import Checkbox from './Checkbox'
import Radiobox from './Radiobox'

export default ({
    table,
    setTable,

    headers,
    setHeaders,

    limits,
    setLimits
}) => {
    const size = table?.columns?.length || 5

    const handlerVisible = (headers) => {
        let checkedCount = headers.reduce((prev, curr) => (curr.checked) ? prev + 1 : prev, 0)
        
        if (checkedCount < 1) return headers

        setHeaders(headers)

        setTable(table.map(t =>
            ({
                ...t,
                data: t.data.map((c, i) => ({
                    ...c,
                    visible: headers[i].checked
                }))
            })
        ))
    }

    return (
        <div className="descriptors">
            <Search />

            {(limits) && <TableDescriptor
                size={size}
                type="filter"
                icon={faFilter}
                styles={{ width: 96 }}
            >
                <Radiobox options={{
                    list: limits,
                    handler: setLimits
                }} />
            </TableDescriptor>}

            {(headers) && <TableDescriptor
                size={size}
                type="visible"
                icon={faEye}
            >
                <Checkbox options={{
                    state: headers,
                    list: headers,
                    handler: handlerVisible
                }} />
            </TableDescriptor>}
        </div>
    )
}