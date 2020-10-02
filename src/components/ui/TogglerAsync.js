import React from 'react'
import Row from './Row'
import Query from './Query'
import Subscription from './Subscription'
import Avatar from './Avatar'
import Message from './Message'
import Toggler from './Toggler'
import { getFormattedData } from '../../utils/functions'

const Container = ({ data, options }) => (
    <Toggler all options={{
        ...options,
        initialOptions: (data || (options?.initialOptions) || []).map(option => ({
            value: option.id,
            label: (
                <Row key={option.id}>
                    <Avatar avatar={{ path: option.icon.path }} properties={['circle']} />
                    <p>{option.title}</p>
                </Row>
            )
        }))
    }} />
)

export default ({ query, subscription, options }) => {
    if (!query)
        return <Message text="Invalid passed props" padding />

    return (
        <Query query={query.value} {...query.props}>
            {({ data }) => (
                (subscription) ? (
                    <Subscription
                        query={subscription.value}
                        variables={subscription.variables}
                        {...subscription.props}
                    >
                        {({ subData }) => <Container
                            data={getFormattedData(subData || data || [])}
                            options={options}
                        />}
                    </Subscription>
                ) : (
                    <Container
                        data={getFormattedData(data || [])}
                        options={options}
                    />
                )
            )}
        </Query>
    )
}