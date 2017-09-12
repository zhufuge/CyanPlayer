import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppRouter from './AppRouter'

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppRouter />
      </MuiThemeProvider>
    )
  }
}

export default App
