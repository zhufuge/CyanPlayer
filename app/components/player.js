import React from 'react';
import {connect} from 'react-redux';

class Player extends React.Component {
  render() {
    const src = this.props.src || '/music/TimeToSayGoodbye.mp3';
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <audio
            controls="controls"
            autoplay="autoplay"
            src={src}
            style={styles.audio}
            ></audio>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'fixed',
    zIndex: 100,
    bottom: 0,
    height: 40,
    width: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303e44',
  },
  content: {
    display: 'flex',
  },
  audio: {
    width: 1000,
  }
};

const mapStateToProps = (state) => {
  return {
    src: state.presentSongSrc
  };
};

export default connect(mapStateToProps)(Player);
