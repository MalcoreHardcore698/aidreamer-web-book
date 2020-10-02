import React from 'react'
import Row from '../ui/Row'
import Button from '../ui/Button'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Row</h1>

            <p className="book-paragraph">Default Row</p>
            <Row>
                <Button options={{ state: 'inactive disabled' }}>
                    <p>Item 1</p>
                </Button>
                <Button options={{ state: 'inactive disabled' }}>
                    <p>Item 2</p>
                </Button>
                <Button options={{ state: 'inactive disabled' }}>
                    <p>Item 3</p>
                </Button>
            </Row>
        </React.Fragment>
    )
}