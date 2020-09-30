import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPen,
    faPlus,
    faTrash
} from '@fortawesome/free-solid-svg-icons'
import Button from '../ui/Button'

function getRoute(
    component=null,
    action=null,
    path, title
) {
    if (!component) return null

    const Component = component.render
    const props = { path, title, ...component.fields }

    if (action === 'add') props.add = true
    if (action === 'edit') props.edit = true
    if (action === 'del') props.del = true

    return [{
        path,  title,
        component: ({ jump, back, close }) => <Component
            jump={jump} back={back} close={close} {...props}
        />
    }]
}

export default ({ add, edit, component, table, disabled, showModal }) => {
    const checked = (table || []).filter(t => t.checked)
    const document = (checked.length === 1) && checked[0]
    const isDisabled = (disabled || !document)

    return (
        <Button options={{
            classNames: 'stretch',
            state: (isDisabled)
                ? 'disable icon inactive'
                : 'active icon',
            disabled: (isDisabled),
            onClick: () => showModal(
                (add) ?
                    getRoute(component, 'add', '/', 'Add') || []
                : (edit) ?
                    getRoute(component, 'edit', '/', 'Edit') || []
                :
                    getRoute(component, 'del', '/', 'Delete') || []
            )
        }}>
            <FontAwesomeIcon icon={(add) ? faPlus : (edit) ? faPen : faTrash} />
        </Button>
    )
}