import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Row from './Row'
import Button from './Button'

export default ({ page, min=0, max=0, setPage }) => {
    const renderPages = () => {
        const pages = []
        for (let i = min; i < (max + 1); i++) {
            if (i < 5) {
                pages.push(
                    <Button key={i} options={{
                        state: (page === i) ? 'disabled icon inactive' : 'active icon',
                        disabled: (page === i),
                        classNames: 'grow',
                        handler: () => setPage(i)
                    }}>
                        <p>{i + 1}</p>
                    </Button>
                )
            }
        }
        return pages.map(page => page)
    }
    
    return (
        <div className="pagination">
            <Button options={{
                classNames: 'grow',
                state: (page === min) ? 'disabled icon inactive' : 'active icon',
                disabled: (page === min),
                handler: () => setPage(page - 1)
            }}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </Button>

            <Row>{renderPages()}</Row>

            <Button options={{
                classNames: 'grow',
                state: (page === max) ? 'disabled icon inactive' : 'active icon',
                disabled: (page === max),
                handler: () => setPage(page + 1)
            }}>
                <FontAwesomeIcon icon={faArrowRight} />
            </Button>
        </div>
    )
}