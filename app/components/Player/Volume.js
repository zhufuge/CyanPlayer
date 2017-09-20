import React from 'react'

import VolumeUp from 'material-ui/svg-icons/av/volume-up'
import VolumeOff from 'material-ui/svg-icons/av/volume-off'
import Slider from 'material-ui/Slider'

class Volume extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      muted: false,
      hover: false,
      value: 1,
      prev: 1,
    }
  }

  handleMute() {
    const newState = !this.state.muted,
      value = newState ? 0 : this.state.prev
    this.setState({
      value,
      muted: newState,
      prev: newState ? this.state.value : this.state.prev
    })
    this.props.audio.muted = newState
    this.props.audio.volume = value
  }

  handleVolume(event, value) {
    this.setState({
      value,
      muted: value === 0
    })
    this.props.audio.volume = value
    this.props.audio.muted = value === 0
  }

  render() {
    const Icon = this.state.muted ? VolumeOff : VolumeUp

    return (
      <div className="flex-c-c">
        <div
          className="flex-c-c"
          title={this.state.muted ? '恢复音量' : '静音'}>
          <Icon
            onClick={() => this.handleMute()}
            onMouseOver={() => this.setState({ hover: true })}
            onMouseOut={() => this.setState({ hover: false })}
            color={this.state.hover ? '#666' : '#999'}/>
        </div>
        <Slider
          title="音量调节"
          style={{ width: 100, height: 66, margin: 8 }}
          value={this.state.value}
          onChange={(event, value) => this.handleVolume(event, value)}/>
      </div>
    )
  }
}

export default Volume
