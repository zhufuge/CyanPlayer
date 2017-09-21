import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/home'
import Sign from './pages/sign'
import Song from './pages/song'

const HFRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <div>
      <Header />
      <Component {...props}/>
      <Footer />
    </div>
  )}/>
)

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <HFRoute exact path="/" component={Song}/>
          <Route path="/sign" component={Sign}/>
          <HFRoute path="/song" component={Song}/>
        </div>
      </Router>
    )
  }
}

export default AppRouter
