import React from 'react';
import {connect} from 'react-redux';
import {setPresentSongSrc} from '../actions';

const primary = {
  name: 'Time to say goodbye',
  album: '...',
  singer: 'Lauren',
  lrc: '...',
  img: '/img/0.png',
  audio: '/music/TimeToSayGoodbye.mp3',
};

class SongCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    fetch('/song', {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `id=${this.props.song}`
    }).then(
      res => res.ok ? res.json() : undefined,
      e => console.log('连接失败' + e)
    ).then(json => {
      if (json) {
        this.setState({
          name: json.name,
          album: json.album,
          singer: json.singer,
          lrc: json.lrc,
          img: json.img,
          audio: json.audio,
        });
        this.props.setPresentSongSrc(json.audio);
      }
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.part}>
          <div style={styles.imgContainer}>
            <img alt="" src={this.state.img || primary.img}/>
          </div>
        </div>
        <div style={styles.part}>
          <div style={styles.songName}>
            {this.state.name || primary.name}
          </div>
          <div style={styles.songInfo}>
            <div>专辑：{this.state.album || primary.album}</div>
            <div>歌手：{this.state.singer || primary.singer}</div>
          </div>
          <div style={styles.lyr}>
            {this.state.lrc || primary.lrc}
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
      ? 'random'
      : state.presentSong
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPresentSongSrc: (src) => {
      dispatch(setPresentSongSrc(src));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongCard);
