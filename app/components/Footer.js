import React from 'react'

import Player from './Player'

class Footer extends React.Component {
  render() {
    return (
      <div style={styles.container}>
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
  },
}

export default Footer
