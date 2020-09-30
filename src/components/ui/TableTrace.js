import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import TableCell from './TableTrace'

export default ({ trace, setTable }) => {
    const handlerChecked = () => {
        setTable(table => table.map(t => (t.id === trace.id) ? ({
            ...t,
            checked: !t.checked
        }) : ({ ...t })))
    }

    return (
        <div className={`trace${(trace?.checked) ? ' checked' : ''}`} onClick={handlerChecked}>
            <div className="checkmark">
                <div className="checkmarks-item">
                    <FontAwesomeIcon icon={faCheck} />
                </div>
            </div>

            {(trace?.data || []).map((cell, iter) =>
                <TableCell key={iter} cell={cell} iter={iter + 2} />
            )}
        </div>
    )
}