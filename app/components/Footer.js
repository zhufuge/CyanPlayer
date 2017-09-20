import React from 'react'

import Player from './Player'
import SongPane from './SongPane'

class Footer extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <SongPane />
        <Player />
      </div>
    )
  }
}

const styles = {
  container: {
    position: 'fixed',
    zIndex: 100,
    bottom: 0,
    height: 54,
    width: '100%',
    backgroundColor: '#fafafa',
    borderTop: '1px solid #eaeaea',
    display: 'grid',
    gridTemplateColumns: '240px 1fr',
  },
}

export default Footer
