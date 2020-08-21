import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import Button from '../ui/Button'
import Row from '../ui/Row'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Button</h1>
            
            <p className="book-paragraph">Below present Button for follow states: Inactive, Active and Disabled</p>

            <p className="book-paragraph">Flat Button</p>
            <Row>
                <Button options={{ type: 'flat' }}>
                    <p>See All</p>
                </Button>
                <Button options={{ type: 'flat', state: 'active' }}>
                    <p>See All</p>
                </Button>
                <Button options={{ type: 'flat', state: 'disabled' }}>
                    <p>See All</p>
                </Button>
            </Row>

            <p className="book-paragraph">Icon Button</p>
            <Row>
                <Button options={{ type: 'icon' }}>
                    <FontAwesomeIcon icon={faFire} />
                </Button>
                <Button options={{ type: 'icon', state: 'active' }}>
                    <FontAwesomeIcon icon={faFire} />
                </Button>
                <Button options={{ type: 'icon', state: 'disabled' }}>
                    <FontAwesomeIcon icon={faFire} />
                </Button>
            </Row>
        </React.Fragment>
    )
}