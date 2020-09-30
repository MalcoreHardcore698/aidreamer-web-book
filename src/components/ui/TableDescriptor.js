import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from './Container'
import Button from './Button'
import Dropdown from './Dropdown'

export default (props) => {
    const {
        size,
        type,
        icon,
        styles,
        children
    } = props

    const Children = children

    const [dropdown, setDropdown] = useState(false)
    
    return (
        <Container clear sticky>
            <Button options={{
                state: 'icon inactive',
                disabled: (size === 0),
                handler: () => setDropdown(!dropdown)
            }}>
                <FontAwesomeIcon icon={icon} />
            </Button>

            <Dropdown options={{ type, styles, dropdown }}>
                {Children}
            </Dropdown>
        </Container>
    )
}