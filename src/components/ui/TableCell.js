import React from 'react'
import { config } from '../../utils/config'

const api = config.get('api')

export default ({ cell, iter }) => {
    if (!cell.visible) return null
    
    return (
        <div
            className={`cell ${cell.type}`}
            style={{ gridColumn: `${iter} / ${iter + 1}` }}
        >
            {(cell.type === 'text') &&
                <p>{(cell.value.length > 99) ? `${cell.value.slice(0, 100)}...` : cell.value}</p>}
            {(cell.type === 'color') &&
                <span style={{ background: cell.value || 'black' }}></span>}
            {(cell.type === 'img') &&
                <img src={(cell.value).replace('./', `${api}/`)} alt={cell.value} />}
            {(cell.type === 'icon') &&
                <img className="icon" src={(cell.value).replace('./', `${api}/`)} alt={cell.value} />}
            {(cell.type === 'hub') &&
                <img className="hub" src={`${api}${cell.value.replace('./', '/')}`} alt={cell.value} />}
        </div>
    )
}