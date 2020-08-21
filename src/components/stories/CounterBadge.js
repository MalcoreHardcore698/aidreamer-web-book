import React from 'react'
import CounterBadge from '../ui/CounterBadge'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">CounterBadge</h1>

            <p className="book-paragraph">Default Counter Badge</p>
            <CounterBadge options={{
                count: 10
            }} />

            <p className="book-paragraph">Custom palette</p>
            <CounterBadge options={{
                color: 'white',
                background: 'var(--color-accent)',
                count: 5
            }} />

            <p className="book-paragraph">Oval Counter Badge</p>
            <CounterBadge options={{
                type: 'oval',
                color: 'white',
                background: 'var(--color-accent)',
                count: 5
            }} />
        </React.Fragment>
    )
}