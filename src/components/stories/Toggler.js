import React from 'react'
import Toggler from '../ui/Toggler'
import Column from '../ui/Column'
import { faClock, faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Toggler</h1>

            <p className="book-paragraph">Section Toggler</p>
            <Toggler options={{
                targets: [
                    { type: 'all', value: <p>All</p> },
                    { type: 'last', value: <FontAwesomeIcon icon={faClock} /> },
                    { type: 'popular', value: <FontAwesomeIcon icon={faFire} /> }
                ]
            }} />

            <p className="book-paragraph">Hubs Toggler</p>
            <Toggler options={{
                targets: [
                    { type: 'csgo', value: <p>CS:GO</p> },
                    { type: 'valorant', value: <p>Valorant</p> },
                    { type: 'overwatch', value: <p>Overwatch</p> },
                    { type: 'lol', value: <p>League of Legends</p> },
                    { type: 'apexlegend', value: <p>Apex Legend</p> },
                    { type: 'gwent', value: <p>Gwent</p> }
                ]
            }} />

            <p className="book-paragraph">Combinate Hubs Toggler</p>
            <Toggler options={{
                type: 'auto',
                targets: [
                    { type: 'csgo', value: <Column center>
                        <div className="icon"><FontAwesomeIcon icon={faFire} /></div>
                        <p>CS:GO</p>
                    </Column> },
                    { type: 'valorant', value: <Column center>
                        <div className="icon"><FontAwesomeIcon icon={faFire} /></div>
                        <p>Valorant</p>
                    </Column> },
                    { type: 'lol', value: <Column center>
                        <div className="icon"><FontAwesomeIcon icon={faFire} /></div>
                        <p>League of Legend</p>
                    </Column> },
                    { type: 'gwent', value: <Column center>
                        <div className="icon"><FontAwesomeIcon icon={faFire} /></div>
                        <p>Gwent</p>
                    </Column> },
                ]
            }} />
        </React.Fragment>
    )
}