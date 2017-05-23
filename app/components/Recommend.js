import React from 'react';

import Divider from 'material-ui/Divider';
import Subheader from './Subheader.js';
import {List, ListItem} from 'material-ui/List';

import Card from './Card.js';

class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songSheets: [],
      songs: [],
      singers: [],
    };
  }

  componentDidMount() {
    fetch("/recommend", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(
      (res) => (res.ok) ? res.json() : {},
      (e) => console.log("连接失败", e)
    ).then(json => {
      this.setState({
        songSheets: json.songSheets,
        songs: json.songs,
        singers: json.singers,
      });
    });
  }

  renderCards(sheets) {
    const data = [];
    for (let i = 0; i < 8; i++) {
      if (i < sheets.length) {
        data.push(sheets[i]);
      } else {
        data.push(i);
      }
    }

    return data.map((v, i) => {
      const k = 's' + ((i < sheets.length) ? v[0] : v);
      return (
        <Card
          key={k}
          value={v[0]}
          onClick={() => {alert("jump to SongSheet");}}
          src={v[1]}/>
      );
    });
  }

  renderSongs(isFirst) {
    const df = {
      name: "Time to say goodbye",
      singer: "Lauren Aquilina"
    };
    const data = isFirst
          ? ['01', '02', '03', '04', '05']
          : ['06', '07', '08', '09', '10'];
    const songs = this.state.songs;
    return data.map((v, i) => {
      const song = (isFirst) ? songs[i] : songs[i + 5];
      return (
        <ListItem
          key={'s' + v}
          onClick={() => {alert("jump to music");}}
          style={(i % 2 === 0) ? {} : styles.oBGC}>
          <span style={styles.mRC('#999')}>{v}</span>
          <span style={styles.mRC('#444')}>
            {(song === void 0) ? df.name : song[0]}</span>
          <span style={styles.songSinger}>
            {(song === void 0) ? df.singer : song[1]}</span>
        </ListItem>
      );
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <Subheader title="推荐歌单" onClick={() => this.props.setTab('b')}/>
        <Divider />
        <div style={styles.cards}>
          {this.renderCards(this.state.songSheets)}
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
          {this.renderCards(this.state.singers)}
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

export default Recommend;
