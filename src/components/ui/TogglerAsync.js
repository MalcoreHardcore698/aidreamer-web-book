import React from 'react'
import Row from './Row'
import Query from './Query'
import Avatar from './Avatar'
import Toggler from './Toggler'

export default ({ name='', query={}, initialState={}, initialOptions=[], initialSlicedFactor=4, onChange=()=>{} }) => (
    <Query query={query.value} {...query.props}>
        {({ data }) => (
            <Toggler all options={{
                setValue: (_, target) => onChange(target),
                initialState, name,
                initialSlicedFactor,
                initialOptions: (data.allHubs || initialOptions).map(hub => ({
                    value: hub.id,
                    label: (
                        <Row key={hub.id}>
                            <Avatar avatar={{ path: hub.icon.path }} properties={['circle']} />
                            <p>{hub.title}</p>
                        </Row>
                    )
                }))
            }} />
        )}
    </Query>
)