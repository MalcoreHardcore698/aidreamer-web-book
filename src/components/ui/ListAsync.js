import React from 'react'
import Query from './Message'
import Subscription from './Subscription'
import List from './List'
import { getFormattedData } from '../../utils/functions'

const Container = ({ data, options, children }) => (
    <List options={{
        ...options,
        list: data
    }}>
        {children}
    </List>
)

export default ({ query, subscription, options, children }) => (
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
                    >
                        {children}
                    </Container>}
                </Subscription>
            ) : (
                <Container
                    data={getFormattedData(data || [])}
                    options={options}
                >
                    {children}
                </Container>
            )
        )}
    </Query>
)