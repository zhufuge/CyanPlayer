import React from 'react'

import Pane from './Pane'

class Sheet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <Pane />
        <div style={styles.songList}>
          <div>歌曲列表</div>
          ['序号', '音乐标题', '歌手', '专辑', '时长']
        </div>
      </div>
    )
  }
}

const styles = {
}

export default Sheet
