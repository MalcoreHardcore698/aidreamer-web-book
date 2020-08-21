import React from 'react'
import Input from '../ui/Input'
import Row from '../ui/Row'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Input</h1>

            <p className="book-paragraph">Default Input</p>
            <Row>
                <Input options={{
                    type: 'text',
                    placeholder: 'Enter your text'
                }} />
                <Input options={{
                    type: 'password',
                    placeholder: 'Enter your password'
                }} />
                <Input options={{
                    type: 'number',
                    placeholder: 'Enter your phone'
                }} />
            </Row>
        </React.Fragment>
    )
}