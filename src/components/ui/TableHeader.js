import React from 'react'

export default ({ cell, iter }) => {
    if (!cell.visible) return null
    
    return (
        <div
            className={`header ${cell.type}`}
            style={{ gridColumn: `${iter} / ${iter + 1}` }}
        >
            {cell.header}
        </div>
    )
}