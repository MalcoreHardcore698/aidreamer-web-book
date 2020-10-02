import React from 'react'
import ActTask from './ActTask'
import Frame from './Frame'
import List from './List'
import Message from './Message'
import '../styles/Act.css'

export default ({ type, act, onChange }) => {
    const classes = [
        'ui-act',
        type
    ]

    return (
        <div className={classes.join(' ')}>
            <Frame value={act.act.title} legend="Act" />

            {(act.act.tasks.length > 0) ? <List options={{
                list: act.act.tasks.map(t => ({
                    ...t,
                    _condition: act?.tasks?.find(_t => (_t.task.id === t.id) && (_t.status === 'COMPLETED'))
                })),
                onChangeItem: (item) => onChange(item)
            }}>
                {({ item }) => <ActTask task={item} />}
            </List>
            : <Message text="No Content" padding />}
        </div>
    )
}