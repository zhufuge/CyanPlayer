import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Home from './views/home'
import Sign from './views/sign'

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/sign" component={Sign}/>
        </div>
      </Router>
    )
  }
}

export default AppRouter
