import React from 'react';
import {render} from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import AppList from './AppList';
import AppTabs from './AppTabs';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <div style={styles.container}>
            <AppList />
            <AppTabs />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  container: {
    margin: '20px 0 0 0',
    display: 'flex',
    justifyContent: 'center',
  },
};

render(<App />, document.getElementById('root'));
