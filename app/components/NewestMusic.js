import React from 'react';

import {List, ListItem} from 'material-ui/List';

class NewestMusic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    fetch('/newest', {
      method: 'GET',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(
      res => res.ok ? res.json() : {songs: []},
      e => console.log("连接失败", e)
    ).then(json => {
      this.setState({
        songs: json.songs,
      });
    });
  }

  list() {
    const song = {
      name: 'Time to say goodbye',
      singer: 'Lambda',
      time: '03:23'
    };
    let data = this.state.songs || [];
    if (data.length === 0) {
      for (let i = 0; i < 20; i++) {
        data.push(i);
      }
    }

    return data.map((v, i) => {
      return (
        <ListItem
          key={'newest-' + i}
          style={(i % 2 === 0) ? {} : {backgroundColor: '#f2f2f2'}}>
          <div style={styles.item}>
            <span style={styles.index}>{i < 10 ? '0' + i : '' + i}</span>
            <div style={styles.name}>
              {v.name || song.name}</div>
            <span style={styles.singer}>
              {v.singer || song.singer}</span>
            <span style={styles.index}>
              {v.time || song.time}</span>
          </div>
        </ListItem>
      );
    });
  }

  render() {
    return (
      <List style={styles.container}>
        {this.list()}
      </List>
    );
  }
}

const styles = {
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'solid',
    margin: 20,
    marginLeft: 0,
  },
  item: {
    display: 'flex',
  },
  index: {
    marginRight: 30,
    color: '#666',
  },
  name: {
    display: 'inline',
    color: '#333',
    width: 400,
    height: 22,
    fontSize: 20,
    fontWeight: '400',
    overflow: 'hidden',
  },
  singer: {
    color: '#999',
    width: 200,
    overflow: 'hidden',
  },
};

export default NewestMusic;
