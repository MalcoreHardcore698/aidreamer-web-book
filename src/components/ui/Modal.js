/*
 * COMPONENT: Modal
 * 
 * MISSION: Dynamic Modal with feture navigation
 * by pages and unlimited depths. Given Modal
 * haven't to need in 'react-router' or 'react-router-dom.
 * This custom Switch, Route and Link for scalable and
 * dynamical app
 *
**/

import React, { useState } from 'react'
import '../styles/Modal.css'
import Transition from './Transition'

function getPath(navigator) {
    if (!navigator || navigator.length === 0)
        return null

    return navigator[navigator.length - 1]
}

const Switch = (props) => {
    const Childrens = props.children
    if (!Childrens) return null
    
    const path = props.path

    let Child = null
    for (const child of Childrens) {
        if (path === child.props.path) {
            Child = child
            break
        }
    }
    return Child
}

const Route = ({ component, jump }) => component(jump)

const Link = (props) => {
    const Children = props.children

    return (
        <button onClick={props.handler}>
            {Children}
        </button>
    )
}

export default ({ options }) => {
    const [navigator, setNavigator] = useState(['/'])
    const [content, setContent] = useState(false)

    const {
        title,
        home,
        routes,
        hideModal,
        closeByBackground=true
    } = options

    const classes = [
        'ui-modal'
    ]

    const transitions = {
        fade: {
            showContent: (routes) ? true : false,
            animation: 'fade',
            handlerEnter: () => setContent(true),
            handlerExit: () => setContent(false),
            duration: 150
        },
        swing: {
            showContent: (content),
            animation: 'swing',
            duration: 150
        }
    }

    const getTitle = () => {
        function compare(route) {
            return (route.path === getPath(navigator))
        }

        const title = routes?.find(route => compare(route))?.title

        return title || 'Default Title'
    }

    const handlerBack = () => {
        setNavigator([
            ...navigator.filter((e, i) => (i !== (navigator.length - 1)))
        ])
    }
    const handlerJump = (path) => {
        setNavigator([
            ...navigator,
            path
        ])
    }
    const handlerClose = () => {
        setContent(false)
        
        setTimeout(() => {
            setNavigator(['/'])
            hideModal()
        }, 100)
    }

    return (
        <Transition {...transitions.fade}>
            <div className={classes.join(' ')}>
                <div
                    className={`background${(!closeByBackground) ? ' clear' : ''}`}
                    onClick={(closeByBackground) && handlerClose}
                ></div>

                <Transition {...transitions.swing}>
                    <div className="wrapper">
                        <div className="headline">
                            {(navigator.length > 1) && <Link handler={handlerBack}>Back</Link>}
                            <h1>{(title && !routes) ? title : getTitle()}</h1>
                        </div>

                        {(home && !routes) ? home
                        : <Switch path={getPath(navigator)}>
                            {routes?.map((props, key) =>
                                <Route key={key} {...props} jump={handlerJump} />
                            )}
                        </Switch>}
                    </div>
                </Transition>
            </div>
        </Transition>
    )
}