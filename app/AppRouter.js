import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './public';
import Sign from './public/sign';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/sign" component={Sign}/>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
