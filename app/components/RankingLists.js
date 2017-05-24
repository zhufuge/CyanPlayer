import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from './Subheader.js';

const df = {
  name: "Time to say goodbye",
  singer: "Lauren Aquilina"
};
const Name = v => <span key={v} style={styles.mRC('#444')}>{v}</span>,
      Singer = v => <span key={v} style={styles.songSinger}>{v}</span>;

class RankingLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: [],
      newest: [],
      hot: [],
      singer: [],
    };
  }
  componentWillMount() {
    fetch("/rank", {
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
          top: json.top,
          newest: json.newest,
          hot: json.hot,
          singer: json.singer,
        });
      }
    });
  }

  riseList(type) {
    const container = this.state[type];
    if (container.length === 0) {
      for (let i = 0; i < 8; i++) {
        container.push(i);
      }
    }

    return container.map((v, i) => {
      return (
        <ListItem
          key={type + '-' + i}
          onClick={() => {alert("jump to music");}}
          style={(i % 2 === 0) ? {} : styles.oBGC}>
          <span style={styles.mRC('#999')}>
            {'0' + (i + 1)}
          </span>
          {(type !== 'singer')
            ? [Name(v.name || df.name), Singer(v.singer || df.singer)]
            : Name(v.name || df.singer)
          }
        </ListItem>
      );
    });
  }

  lists() {
    const container = ['飙升榜', '新歌榜', '热歌榜', '歌手榜'],
          type = ['top', 'newest', 'hot', 'singer'];
    return container.map((v, i) => {
      return (
        <List key={v} style={styles.list}>
          <Subheader title={v} />
          <Divider />
          {this.riseList(type[i])}
        </List>
      );
    });
  }

  render() {
    return (
      <div style={styles.container}>
        {this.lists()}
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

export default RankingLists;
