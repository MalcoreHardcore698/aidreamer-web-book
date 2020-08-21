import React from 'react'
import '../styles/Container.css'

export default (props) => {
    const Children = props.children

    return (
        <div className="ui-container">
            {Children}
        </div>
    )
}