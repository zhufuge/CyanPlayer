import React from 'react';
import {connect} from 'react-redux';

import {cyan500, cyan600} from 'material-ui/styles/colors';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import Pause from 'material-ui/svg-icons/av/pause';
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous';
import SkipNext from 'material-ui/svg-icons/av/skip-next';
import IconButton from 'material-ui/IconButton';
import VolumeUp from 'material-ui/svg-icons/av/volume-up';
import VolumeOff from 'material-ui/svg-icons/av/volume-off';
import Slider from 'material-ui/Slider';
import CircleIconButton from './CircleIconButton';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      time: '00:00',
      volume: 1,
    };
    this.changePlayState = this.changePlayState.bind(this);
    this.volumeOff = this.volumeOff.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }

  changePlayState() {
    this.setState({playing: !this.state.playing});
  }
  volumeOff() {
    this.setState({volume: this.state.volume ^ 1});
  }
  handleVolume(event, value) {
    this.setState({volume: value});
  }

  render() {
    const src = this.props.src || '/music/TimeToSayGoodbye.mp3',
          totalTime = '03:14',
          state = this.state,
          playIcon = (state.playing)
          ? <Pause style={styles.playArrow}/>
          : <PlayArrow style={styles.playArrow}/>,
          volumeIcon = (state.volume === 0) ? <VolumeOff/> : <VolumeUp/>;
    return (
      <div style={styles.container}>
        <div style={styles.handles}>
          <CircleIconButton
            style={styles.smallCircle}
            hover={cyan600}>
            <SkipPrevious style={styles.skip}/>
          </CircleIconButton>
          <CircleIconButton
            onClick={this.changePlayState}
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
          <span style={styles.span}>{state.time}</span>
          <Slider style={{width: 500, height: 66}}/>
          <span style={styles.span}>{totalTime}</span>
        </div>
        <div style={styles.slider}>
          <IconButton iconStyle={{color: '#666'}} onTouchTap={this.volumeOff}>
            {volumeIcon}
          </IconButton>
          <Slider
            style={{width: 100, height: 66}}
            value={state.volume}
            onChange={this.handleVolume}/>
        </div>
        <audio src={src}></audio>
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'fixed',
    zIndex: 100,
    bottom: 0,
    height: 54,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderTop: '1px solid #eaeaea',
  },
  handles: {
    width: 160,
    display: 'flex',
    alignItems: 'center',
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
};

const mapStateToProps = (state) => {
  return {
    src: state.presentSongSrc
  };
};

export default connect(mapStateToProps)(Player);
