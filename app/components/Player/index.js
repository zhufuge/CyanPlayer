import React from 'react'
import { connect } from 'react-redux'

import Slider from 'material-ui/Slider'

import Handles from './Handles'
import Volume from './Volume'

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
      time: 0,
      totalTime: 0,
    }
  }

  componentDidMount() {
    this.setState({ audio: this.refs.audio })
  }

  changePlayState() {
    const playing = this.state.playing
    if (playing) {
      this.state.audio.pause()
      clearInterval(this.interval)
    } else {
      this.state.audio.play()
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
    this.setState({ playing: !playing, totalTime: this.state.audio.duration })
  }

  handleProcess(event, value) {
    const time = value * this.state.totalTime
    this.state.audio.currentTime = time
    this.setState({ time })
  }

  render() {
    const state = this.state,
        process = state.time / state.totalTime

    return (
      <div className="flex-c-c" style={styles.container}>
        <Handles
          playing={this.state.playing}
          onClickPlay={() => this.changePlayState()} />
        <div style={styles.slider}>
          <span style={styles.span}>{secFormat(state.time)}</span>
          <Slider
            style={{ width: 500, height: 66 }}
            defaultValue={0}
            value={Number.isNaN(process) ? 0 : process}
            onChange={(event, value) => this.handleProcess(event, value)}/>
          <span style={styles.span}>{secFormat(state.totalTime)}</span>
        </div>
        <Volume audio={this.state.audio}/>
        <audio
          ref="audio"
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
    src: state.src
  }
}

export default connect(mapStateToProps)(Player)
