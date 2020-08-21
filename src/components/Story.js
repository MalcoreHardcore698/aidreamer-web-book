import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const deafult = '{/* Empty */}'

export default ({ component, source }) => {
    const Component = component

    const options = {
        language: 'jsx',
        showLineNumbers: false,
        wrapLines: true,
        theme: dracula,
        codeBlock: true
    }

    const text = `// Example
    
${source?.example || deafult}`

    return (
        <div className="book-story">
            <Component />

            <div className="codeblock">
                <CopyBlock {...options} text={source?.default || deafult} />
            </div>

            <div className="codeblock">
                <CopyBlock {...options} text={text} />
            </div>
        </div>
    )
}