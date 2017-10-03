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

const WrapRoute = ({ component: Component, ...rest }) => (
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
          <WrapRoute exact path="/" component={Home}/>
          <WrapRoute path="/home" component={Home}/>
          <WrapRoute path="/song" component={Song}/>
          <Route path="/sign" component={Sign}/>
        </div>
      </Router>
    )
  }
}

export default AppRouter
