import React from 'react';

import Header from './Header';
import AppList from './AppList';
import AppTabs from './AppTabs';


class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div style={styles.container}>
          <AppList />
          <AppTabs />
        </div>
      </div>
    );
  }
}


const styles = {
  container: {
    margin: '20px 0 0 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
};

export default Index;
