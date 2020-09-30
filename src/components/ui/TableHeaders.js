import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import TableHeader from './TableHeader'

export default ({ table, setTable }) => {
    const [checked, setChecked] = useState(false)

    const handlerChecked = () => {
        setTable([
            ...table.map(trace => ({
                ...trace,
                checked: !checked
            }))
        ])
        setChecked(!checked)
    }

    return (
        <div className="headers">
            {(table.length > 0) ?
                <React.Fragment>
                    <div className={`checkmark${checked ? ' checked' : ''}`} onClick={handlerChecked}>
                        <div className={`checkmarks-item`}>
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                    </div>
                    {table[0].data.map((cell, iter) =>
                        <TableHeader
                            key={iter + 1}
                            iter={iter + 2}
                            cell={cell}
                        />
                    )}
                </React.Fragment>
            : ''}
        </div>
    )
}