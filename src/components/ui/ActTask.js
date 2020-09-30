import React from 'react'
import Avatar from './Avatar'
import SVGExpIcon from '../../assets/images/exp-icon.svg'
import SVGGemIcon from '../../assets/images/gem-icon.svg'

function getAwardIcon(type) {
    if (type === 'EXP')
        return SVGExpIcon
    else
        return SVGGemIcon
}

export default ({ task }) => {
    return (
        <React.Fragment>
            <Avatar avatar={{ path: item.icon.path }} />
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
        </React.Fragment>
    )
}