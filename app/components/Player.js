import React from 'react'
import { connect } from 'react-redux'

import { cyan500, cyan600 } from 'material-ui/styles/colors'
import PlayArrow from 'material-ui/svg-icons/av/play-arrow'
import Pause from 'material-ui/svg-icons/av/pause'
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous'
import SkipNext from 'material-ui/svg-icons/av/skip-next'
import IconButton from 'material-ui/IconButton'
import VolumeUp from 'material-ui/svg-icons/av/volume-up'
import VolumeOff from 'material-ui/svg-icons/av/volume-off'
import Slider from 'material-ui/Slider'
import CircleIconButton from './CircleIconButton'

const trunc = Math.trunc
const toTimeString = (n) => n < 10 ? '0' + n : n
const secFormat = (sec) =>
  (trunc(sec / 60 / 60) !== 0 ? toTimeString(trunc(sec / 60 / 60)) + ':' : '') +
  toTimeString(trunc(sec / 60) % 60) + ':' +
  toTimeString(trunc(sec) % 60)

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      muted: false,
      time: 0,
      totalTime: 0,
    }
  }

  changePlayState() {
    const playing = this.state.playing
    if (playing) {
      this.audio.pause()
      clearInterval(this.interval)
    } else {
      this.audio.play()
      this.interval = setInterval(() => {
        const time = this.state.time
        if (time + 1 >= this.state.totalTime &&
            this.interval) {
          clearInterval(this.interval)
          return
        }
        this.setState({ time: time + 1 })
      }, 1000)
    }
    this.setState({ playing: !playing, totalTime: this.audio.duration })
  }

  handleProcess(event, value) {
    const time = value * this.state.totalTime
    this.audio.currentTime = time
    this.setState({ time })
  }

  handleMute() {
    const muted = this.state.muted
    this.audio.muted = !muted
    this.setState({ muted: !muted })
  }
  handleVolume(event, value) {
    const muted = this.state.muted
    if (!muted && value === 0) {
      this.setState({ muted: true })
    } else if (muted && value !== 0) {
      this.setState({ muted: false })
    }
    this.audio.volume = value
  }

  render() {
    const state = this.state
    const playIcon = (state.playing)
          ? <Pause style={styles.playArrow}/>
          : <PlayArrow style={styles.playArrow}/>,
          volumeIcon = state.muted ? <VolumeOff/> : <VolumeUp/>,
          process = state.time / state.totalTime
    return (
      <div className="flex-c-c" style={styles.container}>
        <div className="flex-c-c" style={styles.handles}>
          <CircleIconButton
            style={styles.smallCircle}
            hover={cyan600}>
            <SkipPrevious style={styles.skip}/>
          </CircleIconButton>
          <CircleIconButton
            onClick={() => this.changePlayState()}
            style={styles.bigCircle}
            hover={cyan600}>
            {playIcon}
          </CircleIconButton>
          <CircleIconButton
            style={styles.smallCircle}
            hover={cyan600}>
            <SkipNext style={styles.skip}/>
          </CircleIconButton>
        </div>
        <div style={styles.slider}>
          <span style={styles.span}>{secFormat(state.time)}</span>
          <Slider
            style={{ width: 500, height: 66 }}
            defaultValue={0}
            value={Number.isNaN(process) ? 0 : process}
            onChange={(event, value) => this.handleProcess(event, value)}/>
          <span style={styles.span}>{secFormat(state.totalTime)}</span>
        </div>
        <div style={styles.slider}>
          <IconButton
            iconStyle={{ color: '#666' }}
            onClick={() => this.handleMute()}>
            {volumeIcon}
          </IconButton>
          <Slider
            style={{ width: 100, height: 66 }}
            defaultValue={1}
            onChange={(event, value) => this.handleVolume(event, value)}/>
        </div>
        <audio
          ref={(ref) => this.audio = ref}
          src={this.props.src || '/music/TimeToSayGoodbye.mp3'}></audio>
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
  handles: {
    width: 160,
    justifyContent: 'space-around',
  },
  bigCircle: {
    backgroundColor: cyan500,
  },
  smallCircle: {
    backgroundColor: cyan500,
    width: 36,
    height:36,
  },
  playArrow: {
    width: 32,
    height: 32,
    color: 'white',
  },
  skip: {
    width: 28,
    height: 28,
    color: 'white',
  },
  slider: {
    display: 'flex',
    alignItems: 'center',
  },
  span: {
    color: '#666',
    fontSize: 13,
    margin: '0 16px',
  },
}

const mapStateToProps = (state) => {
  return {
    src: state.presentSongSrc
  }
}

export default connect(mapStateToProps)(Player)
