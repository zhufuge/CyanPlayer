import React from 'react';

import Header from './Header';
import AppList from './AppList';
import AppTabs from './AppTabs';
import Player from './player';


class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div style={styles.container}>
          <AppList />
          <AppTabs />
        </div>
        <Player />
      </div>
    );
  }
}


const styles = {
  container: {
    margin: '70px 0 70px 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
};

export default Index;
