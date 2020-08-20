import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CopyBlock, dracula } from 'react-code-blocks'
import icons from '../../stores/icons'
import '../styles/Icons.css'

const source = {
    install: `npm i @fortawesome/fontawesome-svg-core
npm i @fortawesome/free-solid-svg-icons
npm i @fortawesome/react-fontawesome`,
    example: `import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'

<FontAwesomeIcon icon={faFire} />`
}

const Icons = ({ icons }) =>
    <ul className="icons">
        {icons.map((icon, index) => <Icon key={index} icon={icon} />)}
    </ul>

const Icon = ({ icon }) =>
    <li className="icon">
        <FontAwesomeIcon icon={icon.icon} />
        <span>{icon.code}</span>
    </li>

export default () => {
    return (
        <React.Fragment>
            <h1 className="book-title">Icons</h1>
            <p>To use icons, please install <a
                href="https://fontawesome.com/"
                target="_blank"
                rel="noopener noreferrer"
            >FontAwesome</a> package</p>

            <div className="codeblock">
                <CopyBlock
                    language="js"
                    text={source.install}
                    showLineNumbers={false}
                    wrapLines={true}
                    theme={dracula}
                    codeBlock
                />
            </div>

            <p>Example:</p>

            <div className="codeblock">
                <CopyBlock
                    language="jsx"
                    text={source.example}
                    showLineNumbers={false}
                    wrapLines={true}
                    theme={dracula}
                    codeBlock
                />
            </div>

            <Icons icons={icons} />
        </React.Fragment>
    )
}