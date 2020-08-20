import React from 'react'
import { faClock, faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from '../ui/Section'
import Entry from '../ui/Entry'
import Row from '../ui/Row'

import ImageAvatar from '../../assets/images/avatar.png'
import ImageArticle from '../../assets/images/article.png'
import ImageTourPoster from '../../assets/images/poster.png'

import articles from '../../stores/articles'
import offers from '../../stores/offers'
import tours from '../../stores/tours'

import '../styles/Section.css'

export default () => {
    const targets = [
        { type: 'all', value: <p>All</p> },
        { type: 'last', value: <FontAwesomeIcon icon={faClock} /> },
        { type: 'popular', value: <FontAwesomeIcon icon={faFire} /> }
    ]

    return (
        <React.Fragment>
            <h1 className="book-title">Section</h1>

            <p className="book-paragraph">Default Section</p>
            <Section options={{
                name: 'preview',
                title: 'Title',
                subtitle: 'Subtitle',
                targets
            }}></Section>

            <p className="book-paragraph">Section with Content</p>
            <Row type="flex">
                <Section options={{
                    name: 'news',
                    title: 'News',
                    subtitle: articles.length,
                    targets
                }}>
                    {articles.map((article, key) =>
                        <Entry key={key} options={{
                            capacious: false,
                            userBar: {
                                name: article.author,
                                status: 'online',
                                avatar: ImageAvatar
                            },
                            statusBar: [
                                { lite: 'Comments', dark: '47' },
                                { lite: 'Views', dark: '13,541' },
                                { lite: 'May, 16', dark: '14:15 AM' }
                            ]
                        }}>
                            <img className="image" src={ImageArticle} alt="Article" />
                            <h2 className="title">Need a teammate</h2>
                            <p className="paragraph">Some text for opinion</p>
                        </Entry>  
                    )}
                </Section>

                <Section options={{
                    name: 'user-offers',
                    title: 'My Offers',
                    subtitle: offers.length,
                    targets
                }}>
                    {offers.map((offer, key) =>
                        <Entry key={key} options={{
                            editable: true,
                            capacious: false,
                            statusBar: [
                                { lite: 'May, 16', dark: '14:15 AM' }
                            ]
                        }}>
                            <h2 className="title">{offer.title}</h2>
                        </Entry>    
                    )}
                </Section>
            </Row>

            <Section options={{
                name: 'user-tours',
                title: 'My Tours',
                subtitle: tours.length,
                filter: true,
                targets
            }}>
                {tours.map((tour, key) =>
                    <Entry key={key} options={{
                        editable: true,
                        capacious: false,
                        manageOffset: true,
                        statusBar: [
                            { lite: 'Participants', dark: tour.participants },
                            { lite: 'Date', dark: tour.date },
                            { lite: 'Prize Pool', dark: tour.prize },
                            { lite: 'Location', dark: tour.location }
                        ]
                    }}>
                        <img className="image" src={ImageTourPoster} alt="Tour" />
                        <h2 className="title separeted">
                            <span>{tour.title}</span><span>{tour.type}</span>
                        </h2>
                    </Entry>  
                )}
            </Section>
        </React.Fragment>
    )
}