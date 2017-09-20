import React from 'react'

import PlayArrow from 'material-ui/svg-icons/av/play-arrow'
import Pause from 'material-ui/svg-icons/av/pause'
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous'
import SkipNext from 'material-ui/svg-icons/av/skip-next'

import CircleIconButton from './CircleIconButton'

class Handles extends React.Component {
  render() {
    return (
      <div className="flex-c-c" style={styles.container}>
        <CircleIconButton
          title="上一首"
          style={styles.small}>
          <SkipPrevious style={styles.side}/>
        </CircleIconButton>
        <CircleIconButton
          title={this.props.playing ? "暂停" : "播放"}
          onClick={() => this.props.onClickPlay()}>
          {(this.props.playing)
           ? <Pause style={styles.mid}/>
           : <PlayArrow style={styles.mid}/>}
        </CircleIconButton>
        <CircleIconButton
          title="下一首"
          style={styles.small}>
          <SkipNext style={styles.side}/>
        </CircleIconButton>
      </div>
    )
  }
}

const styles = {
  container: {
    width: 160,
    justifyContent: 'space-around',
  },
  small: {
    width: 36,
    height:36,
  },
  mid: {
    width: 32,
    height: 32,
    color: 'white',
  },
  side: {
    width: 28,
    height: 28,
    color: 'white',
  },
}

export default Handles
