import React from 'react';
import {connect} from 'react-redux';
import {setPresentSong, setPage, setSongSheet} from '../actions';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from './Subheader.js';

const df = {
  name: "Time to say goodbye",
  singer: "Lauren Aquilina"
};

class RankingLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: [],
      newest: [],
      hot: [],
      singer: [],
    };

    this.handleSongClick = this.handleSongClick.bind(this);
    this.handleSingerClick = this.handleSingerClick.bind(this);
  }
  componentWillMount() {
    fetch("/rank", {method: "GET"}).then(
      res => (res.ok) ? res.json() : undefined,
      e => console.log("连接失败", e)
    ).then(json => {
      if (json) {
        this.setState({
          top: json.top,
          newest: json.newest,
          hot: json.hot,
          singer: json.singer,
        });
      }
    });
  }

  renderList(type) {
    const container = this.state[type];
    if (container.length === 0) {
      for (let i = 0; i < 8; i++) {
        container.push(i);
      }
    }

    return container.map((v, i) => {
      const song = (v.id) ? v : df;
      return (
        <ListItem
          key={v.id || type + '-' + i}
          onClick={() => this.handleSongClick(song.id)}
          style={(i % 2 === 0) ? {} : styles.oBGC}>
          <span style={styles.mRC('#999')}>
            {'0' + (i + 1)}
          </span>
          <span style={styles.mRC('#444')}>{song.name}</span>
          <span style={styles.songSinger}>{song.singer}</span>
        </ListItem>
      );
    });
  }

  handleSongClick(song) {
    this.props.setPresentSong(song);
    this.props.setPage('2');
  }

  renderSingerList() {
    const container = this.state.singer;
    if (container.length === 0) {
      for (let i = 0; i < 8; i++) {
        container.push(i);
      }
    }

    return container.map((v, i) => {
      return (
        <ListItem
          key={'singer-' + i}
          onClick={() => this.handleSingerClick(v.id || df.id)}
          style={(i % 2 === 0) ? {} : styles.oBGC}>
          <span style={styles.mRC('#999')}>
            {'0' + (i + 1)}
          </span>
          <span style={styles.mRC('#444')}>
            {v.name || df.singer}
          </span>
        </ListItem>
      );
    });
  }

  handleSingerClick(singer) {
    this.props.setSongSheet(singer);
    this.props.setPage('6');
  }

  lists() {
    const container = ['飙升榜', '新歌榜', '热歌榜'],
          type = ['top', 'newest', 'hot'];
    return container.map((v, i) => {
      return (
        <List key={v} style={styles.list}>
          <Subheader title={v} />
          <Divider />
          {this.renderList(type[i])}
        </List>
      );
    });
  }

  render() {
    return (
      <div style={styles.container}>
        {this.lists()}
        <List style={styles.list}>
          <Subheader title="歌手榜" />
          <Divider />
          {this.renderSingerList()}
        </List>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 24,
  },
  list: {
    width: 360,
    height: 413,

    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,

    margin: 16,
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
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPresentSong: (song) => {
      dispatch(setPresentSong(song));
    },
    setPage: (page) => {
      dispatch(setPage(page));
    },
    setSongSheet: (sheet) => {
      dispatch(setSongSheet(sheet));
    }
  };
};

export default connect(null, mapDispatchToProps)(RankingLists);
