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
                <Button options={{ state: 'active flat' }}>
                    <p>See All</p>
                </Button>
                <Button options={{ state: 'inactive flat' }}>
                    <p>See All</p>
                </Button>
                <Button options={{ state: 'inactive disabled' }}>
                    <p>See All</p>
                </Button>
                <Button options={{ state: 'disabled flat' }}>
                    <p>See All</p>
                </Button>
                <Button options={{ state: 'flat' }}>
                    <p>See All</p>
                </Button>
            </Row>

            <p className="book-paragraph">Icon Button</p>
            <Row>
                <Button options={{ state: 'active icon' }}>
                    <FontAwesomeIcon icon={faFire} />
                </Button>
                <Button options={{ state: 'inactive icon' }}>
                    <FontAwesomeIcon icon={faFire} />
                </Button>
                <Button options={{ state: 'inactive disabled icon' }}>
                    <FontAwesomeIcon icon={faFire} />
                </Button>
                <Button options={{ state: 'disabled icon' }}>
                    <FontAwesomeIcon icon={faFire} />
                </Button>
                <Button options={{ state: 'icon' }}>
                    <FontAwesomeIcon icon={faFire} />
                </Button>
            </Row>
        </React.Fragment>
    )
}