import React from 'react'
import Query from './Message'
import Subscription from './Subscription'
import Radiobox from './Radiobox'
import { getFormattedData } from '../../utils/functions'

const Container = ({ data, options }) => (
    <Radiobox options={{
        ...options,
        list: data
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