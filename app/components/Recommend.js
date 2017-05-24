import React from 'react';
import {connect} from 'react-redux';
import {setPresentSong, setPage} from '../actions';

import Divider from 'material-ui/Divider';
import Subheader from './Subheader.js';
import {List, ListItem} from 'material-ui/List';

import Card from './Card.js';

const df = {
  name: "Time to say goodbye",
  singer: "Lauren Aquilina"
};

class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songSheets: [],
      songs: [],
      singers: [],
    };

    this.handleSongClick = this.handleSongClick.bind(this);
  }
  componentWillMount() {
    fetch("/recommend", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(
      res => (res.ok) ? res.json() : undefined,
      e => console.log("连接失败", e)
    ).then(json => {
      if (json) {
        this.setState({
          songSheets: json.songSheets,
          songs: json.songs,
          singers: json.singers,
        });
      }
    });
  }

  renderCards(type) {
    const container = [],
          data = this.state[type];
    for (let i = 0; i < 8; i++) {
      if (i < data.length) {
        container.push(data[i]);
      } else {
        container.push(i);
      }
    }

    return container.map((v, i) => {
      return (
        <Card
          key={'recommend-' + type + '-' + i}
          value={v.name}
          onClick={() => {alert("jump to SongSheet");}}
          src={v.src}/>
      );
    });
  }

  renderSongs(isLeft) {
    const data = this.state.songs,
          container = isLeft
          ? ['01', '02', '03', '04', '05']
          : ['06', '07', '08', '09', '10'];

    return container.map((v, i) => {
      let song = (isLeft) ? data[i] : data[i + 5];
      song = (song === void 0) ? df : song;
      return (
        <ListItem
          key={'recommend-' + 'songs-'+ i}
          onClick={() => this.handleSongClick(v)}
          style={(i % 2 === 0) ? {} : styles.oBGC}>
          <span style={styles.mRC('#999')}>
            {v}
          </span>
          <span style={styles.mRC('#444')}>
            {song.name}
          </span>
          <span style={styles.songSinger}>
            {song.singer}
          </span>
        </ListItem>
      );
    });
  }

  handleSongClick(song) {
    this.props.setPresentSong(song);
    this.props.setPage('2');
  }

  render() {
    return (
      <div style={styles.container}>
        <Subheader title="推荐歌单" onClick={() => this.props.setTab('b')}/>
        <Divider />
        <div style={styles.cards}>
          {this.renderCards('songSheets')}
        </div>
        <Subheader title="推荐音乐" onClick={() => this.props.setTab('e')}/>
        <Divider />
        <div style={styles.songs}>
          <List style={styles.list}>
            {this.renderSongs(true)}
          </List>
          <List style={styles.list}>
            {this.renderSongs(false)}
          </List>
        </div>
        <Subheader title="推荐歌手" onClick={() => this.props.setTab('d')}/>
        <Divider />
        <div style={styles.cards}>
          {this.renderCards('singers')}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: 16,
    marginRight: 16,
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 24,
  },
  songs: {
    display: 'flex',
    marginTop: 16,
    marginBottom: 36,
  },
  oBGC: {
    backgroundColor: '#f2f2f2',
  },
  mRC: (color) => ({
    marginRight: 16,
    color,
  }),
  songSinger: {
    position: 'absolute',
    right: 16,
    color: '#999',
  },
  list: {
    width: 396,
    height: 240,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,
  },
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPresentSong: (song) => {
      dispatch(setPresentSong(song));
    },
    setPage: (page) => {
      dispatch(setPage(page));
    }
  };
};

export default connect(null, mapDispatchToProps)(Recommend);
