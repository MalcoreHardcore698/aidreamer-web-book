import React from 'react'
import Column from '../ui/Column'
import Button from '../ui/Button'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Column</h1>

            <p className="book-paragraph">Default Column</p>
            <Column>
                <Button options={{ state: 'inactive disabled' }}>
                    <p>Item 1</p>
                </Button>
                <Button options={{ state: 'inactive disabled' }}>
                    <p>Item 2</p>
                </Button>
                <Button options={{ state: 'inactive disabled' }}>
                    <p>Item 3</p>
                </Button>
            </Column>
        </React.Fragment>
    )
}