import React from 'react'
import Slider from '../ui/Slider'
import { faClock, faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Slider</h1>

            <p className="book-paragraph">Section Slider</p>
            <Slider options={{
                targets: [
                    { type: 'all', value: <p>All</p> },
                    { type: 'last', value: <FontAwesomeIcon icon={faClock} /> },
                    { type: 'popular', value: <FontAwesomeIcon icon={faFire} /> }
                ]
            }} />

            <p className="book-paragraph">Hubs Slider</p>
            <Slider options={{
                targets: [
                    { type: 'csgo', value: <p>CS:GO</p> },
                    { type: 'valorant', value: <p>Valorant</p> },
                    { type: 'overwatch', value: <p>Overwatch</p> },
                    { type: 'lol', value: <p>League of Legends</p> },
                    { type: 'apexlegend', value: <p>Apex Legend</p> },
                    { type: 'gwent', value: <p>Gwent</p> }
                ]
            }} />
        </React.Fragment>
    )
}