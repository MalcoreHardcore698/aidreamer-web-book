/*
 * COMPONENT: SectionAsync
 * 
 * MISSION: Fetching data and rendering in
 * Section components
 * 
 * IMPORTANT: Must be installed Apollo packages
 * More: https://www.apollographql.com/docs/react/
 *
**/

import React from 'react'
import Query from './Message'
import Section from './Section'
import Subscription from './Subscription'

export default (props) => {
    const query = props.query
    const subscription = props.subscription

    return (
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
                        {({ subData }) => (
                            <Section
                                data={data}
                                subData={subData}
                                {...props.options}
                            />
                        )}
                    </Subscription>
                ) : (
                    <Section
                        data={data}
                        {...props.options}
                    />
                )
            )}
        </Query>
    )
}