import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Sidebar from './Sidebar'
import book from '../book'
import routes from '../routes'

import '../assets/styles/App.css'

export default () => {
  return (
    <div className="book">
      <Router>
        <Sidebar book={book} />
        <Switch>
          {routes.map((props, index) =>
            <Route key={index} {...props} />  
          )}
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}
