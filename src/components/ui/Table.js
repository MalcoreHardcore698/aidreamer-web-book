/*
 * COMPONENT: Table
 * 
 * MISSION: ...
 *
**/

import React, { useState, useEffect, useMemo } from 'react'
import TableManage from './TableManage'
import TableDescriptors from './TableDescriptors'
import TableHeaders from './TableHeaders'
import TableBody from './TableBody'
import TablePagination from './TablePagination'
import Message from './Message'
import { getPage, getMaxPage } from '../../utils/functions'
import '../styles/Table.css'

const limitDefault = 10
const limitList = [5, 10, 15, 20, 30, 40, 50]

export default ({
    type='default',
    component=null,
    data=null,
    columns=[],
    showModal=null,
    classNames=''
}) => {
    const classes = [
        'ui-table', classNames, type
    ].filter(c => c)
    
    const [page, setPage] = useState(0)
    const [table, setTable] = useState([])
    const [headers, setHeaders] = useState([])
    const [disabled, setDisabled] = useState(true)
    const [limits, setLimits] = useState(limitList.map((l, i) => ({
        id: i,
        value: l,
        checked: (limitDefault === l)
    })))

    const max = useMemo(() =>
        getMaxPage(columns, limits?.find(l => l.checked)?.value || limitDefault)
    , [columns, limits])

    useEffect(() => {
        const limit = limits?.find(l => l.checked)?.value || limitDefault
        const content = getPage(columns, limit, page)

        setTable(content.map((trace, i) => ({
            ...data[i],
            _id: data[i].id,
            id: i,
            data: trace.map((cell, j) => ({
                id: `cell-${i}-${j}`,
                header: cell.header,
                value: cell.value,
                type: cell.type,
                sortabled: cell.hasOwnProperty('sortabled')
                    ? cell.sortabled
                    : false,
                visible: cell.hasOwnProperty('visible')
                    ? cell.visible 
                    : true
            })),
            checked: false
        })))
    }, [data, columns, limits, page])

    useEffect(() => {
        const checked = (table || []).filter(t => t.checked)
        if (checked.length > 0) setDisabled(false)
        else setDisabled(true)

        if (table) {
            setHeaders(table[0]?.data.map((tr, i) => ({
                id: i,
                title: tr.header,
                checked: tr.visible
            })))
        }
    }, [table])

    if (!data)
        return <Message text="Invalid passed props" padding />

    return (
        <div className={classes.join(' ')}>
            {(component) && <TableManage
                component={component}
                data={data}
                table={table}
                disabled={disabled} 
                showModal={showModal}
            />}

            <TableDescriptors
                table={table}
                limits={limits}
                headers={headers}
                setTable={setTable}
                setLimits={setLimits}
                setHeaders={setHeaders}
            />

            <TablePagination max={max} page={page} setPage={setPage} />

            <div className={`table ${type}`}>
                {(type !== 'default') && <TableHeaders table={table} setTable={setTable} />}

                {(table.length === 0)
                    ? <Message text="Данные отсутсвуют" padding />
                    : <TableBody table={table} setTable={setTable} />}
            </div>

            <TablePagination max={max} page={page} setPage={setPage} />
        </div>
    )
}