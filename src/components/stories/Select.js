import React from 'react'
import Select from '../ui/Select'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Select</h1>

            <Select options={{
                placeholder: 'Choose role',
                options: [
                    { value: 'ADMIN', label: 'ADMIN' },
                    { value: 'USER', label: 'USER' },
                    { value: 'MODERATOR', label: 'MODERATOR' },
                    { value: 'MANAGER', label: 'MANAGER' }
                ]
            }} />
        </React.Fragment>
    )
}