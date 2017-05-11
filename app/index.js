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
            <div style={styles.side}>
              <AppList />
            </div>
            <div style={styles.content}>
              <AppTabs />
            </div>
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
  side: {
    width: 240,
    height: 420,
    marginRight: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(217, 217, 217)',
  },
  content: {
    width: 800,
    height: 1000,
    backgroundColor: 'skyblue',
  }
};

render(<App />, document.getElementById('root'));
