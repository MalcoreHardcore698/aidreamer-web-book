import React from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Container</h1>

            <p className="book-paragraph">Default Container</p>
            <Container>
                <Button options={{ state: 'inactive disabled' }}>
                    <p>Button</p>
                </Button>
            </Container>
        </React.Fragment>
    )
}