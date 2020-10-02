import React from 'react'
import Avatar from './Avatar'
import SVGExpIcon from '../../assets/images/exp-icon.svg'
import SVGGemIcon from '../../assets/images/gem-icon.svg'
import '../styles/ActTask.css'

function getAwardIcon(type) {
    if (type === 'EXP')
        return SVGExpIcon
    else
        return SVGGemIcon
}

export default ({ task }) => {
    return (
        <div className="ui-acttask">
            <Avatar avatar={{ path: task.icon.path }} />
            <div className="text">
                <p className="name">
                    <span>{task.title}</span>
                    {task.awards.map(award =>
                        <span key={award.id} className="award">{
                            <img src={getAwardIcon(award.award)} alt="Icon" />
                        }</span>    
                    )}
                </p>
                <p className="condition">{task.translation}</p>
            </div>
        </div>
    )
}