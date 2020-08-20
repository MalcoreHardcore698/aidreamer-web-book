import React from 'react'
import Skeleton from 'react-skeleton-loader'

export default ({ component }) => {
    
    const renderContent = () => {
        switch (component) {
            case 'avatar':
                return <Skeleton widthRandomness={0} height="128px" width="128px" />
            case 'hub':
                return <Skeleton widthRandomness={0} height="256px" width="385px" />
            case 'offer':
                return <Skeleton widthRandomness={0} height="128px" width="196px" />
            default:
                return <Skeleton widthRandomness={0} height="256px" width="100%" />
        }
    }

    return renderContent()
}