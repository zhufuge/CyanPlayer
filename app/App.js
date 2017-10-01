import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppRouter from './AppRouter'
import events from './common/events'

let store = createStore(reducers)
events(store)

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App
