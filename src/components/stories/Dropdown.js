import React, { useState } from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Checkbox from '../ui/Checkbox'
import Entry from '../ui/Entry'
import Dropdown from '../ui/Dropdown'
import ImageAvatar from '../../assets/images/avatar.png'
import ImageArticle from '../../assets/images/article.png'

export default () => {
    const [checked, setChecked] = useState('Item 1')
    const [dropdown1, setDropdown1] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)

    return (
        <React.Fragment>
            <h1 className="book-title">Dropdown</h1>

            <p className="book-paragraph">Dropdown with Entry</p>
            <Container clear sticky>
                <Button options={{
                    state: 'active',
                    handler: () => setDropdown1(!dropdown1)
                }}>
                    <p>See Article</p>
                </Button>

                <Dropdown options={{ dropdown: dropdown1, styles: { left: 0, width: 320 } }}>
                    <Entry options={{
                        userBar: {
                            name: 'noctua',
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
                </Dropdown>
            </Container>
            
            <p className="book-paragraph">Dropdown with Checkbox</p>
            <Container clear sticky>
                <Button options={{
                    state: 'active',
                    handler: () => setDropdown2(!dropdown2)
                }}>
                    <p>Checkboxes</p>
                </Button>

                <Dropdown options={{ dropdown: dropdown2, styles: { left: 0 } }}>
                    <Checkbox options={{
                        list: [
                            { id: 0, value: 'Item 1', checked: true },
                            { id: 1, value: 'Item 2', checked: false },
                            { id: 2, value: 'Item 3', checked: false }
                        ],
                        handler: setChecked
                    }} />
                </Dropdown>
            </Container>
        </React.Fragment>
    )
}