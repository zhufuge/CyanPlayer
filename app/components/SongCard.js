import React from 'react';
import {connect} from 'react-redux';

class SongCard extends React.Component {
  constructor(props) {
    super(props);
  }

  // TODO songName
  render() {
    const songName = (this.props.song === '')
          ? 'Time to say goodbye'
          : this.props.song;
    return (
      <div style={styles.container}>
        <div style={styles.part}>
          <div style={styles.imgContainer}>
            <img alt="" src="/img/0.png"/>
          </div>
        </div>
        <div style={styles.part}>
          <div style={styles.songName}>{songName}</div>
          <div style={styles.songInfo}>
            <div>专辑：xxx</div>
            <div>歌手：Lauren</div>
          </div>
          <div style={styles.lyr}>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: 820,
    height: 600,
    display: 'flex',
  },
  part: {
    display: 'flex',
    flexDirection: 'column',
    margin: 15,
    width: 370,
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    height: 300,
    overflow: 'hidden',
    marginTop: 50,
    marginLeft: 30,
    border: '1px solid #666',
    borderRadius: 6,
  },
  songName: {
    fontSize: 26,
    color: '#666',
  },
  songInfo: {
    marginTop: 10,
    marginBottom: 24,
    paddingRight: 30,
    display: 'flex',
    justifyContent: 'space-between',
    color: '#666',
    fontSize: 14,
  },
  lyr: {
    width: '100%',
    height: 420,
    backgroundColor: '#f0f0f0',
    overflowY: 'scroll',
    overflowX: 'hidden',
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    song: (ownProps.type === 'random')
      ? '随机音乐'
      : state.presentSong
  };
};

export default connect()(SongCard);
