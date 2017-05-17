import React from 'react';

class Player extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <audio
            src="./TimeToSayGoodbye.mp3"
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

export default Player;
