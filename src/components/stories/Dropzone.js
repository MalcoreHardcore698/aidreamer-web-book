import React from 'react'
import Dropzone from '../ui/Dropzone'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Dropzone</h1>

            <p className="book-paragraph">Default Dropzone</p>
            <Dropzone
                options={{
                    name: 'preview',
                    accept: 'image/*'
                }}
            />
        </React.Fragment>
    )
}