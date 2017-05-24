import React from 'react';
import {connect} from 'react-redux';

class Player extends React.Component {
  render() {
    const src = './TimeToSayGoodbye.mp3';
    return (
      <div style={styles.container}>
        {'song: ' + this.props.song}
        <div style={styles.content}>
          <audio
            src={src}
            controls="controls"
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
    backgroundColor: 'skyblue',
  }
};

const mapStateToProps = (state) => {
  return {
    song: state.presentSong
  };
};

export default connect(mapStateToProps)(Player);
