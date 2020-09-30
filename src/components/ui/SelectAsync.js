import React from 'react'
import Query from './Message'
import Subscription from './Subscription'
import Select from './Select'

const Container = (data, options) => (
    <Select options={{
        ...options,
        options: data
    }} />
)

export default ({ query, subscription, options }) => (
    <Query
        query={query.value}
        variables={query.variables}
        {...query.props}
    >
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