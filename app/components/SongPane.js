import React from 'react'

import FavoBor from 'material-ui/svg-icons/action/favorite-border'
import Share from 'material-ui/svg-icons/Social/share'
import { curtail } from '../common/util'

const DEFAULT = {
  id: '001',
  name: "Time to say goodbye",
  singer: "Lauren Aquilina",
  src: "./img/0.png",
}

class SongPane extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div className="flex-c-c">
          <img style={styles.img} src={DEFAULT.src} alt="" />
        </div>
        <div style={styles.grid}>
          <span style={styles.name}>{curtail(DEFAULT.name, 12)}</span>
          <FavoBor style={styles.favoBor} color="#999"/>
          <span style={styles.singer}>{curtail(DEFAULT.singer, 12)}</span>
          <Share style={styles.share} color="#999"/>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    width: 221,
    height: 54,
    borderRight: '1px solid #eaeaea',
    display: 'grid',
    gridTemplateColumns: '64px 1fr',
  },
  img: {
    width: 54,
    height: 54,
    borderRight: '1px solid #eee',
    cursor: 'pointer',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '128px 26px',
    gridTemplateRows: '26px 26px',
    fontSize: 14,
  },
  name: {
    color: '#666',
  },
  singer: {
    color: '#999',
  },
  favoBor: {
    height: 18,
    width: 18,
    margin: 3,
  },
  share: {
    height: 18,
    width: 18,
    margin: 3,
  }
}

export default SongPane
