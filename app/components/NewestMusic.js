import React from 'react';
import {connect} from 'react-redux';
import {setPresentSong, setPage} from '../actions';

import {List, ListItem} from 'material-ui/List';

const df = {
  id: '001',
  name: 'Time to say goodbye',
  singer: 'Lambda',
  time: '03:23'
};

class NewestMusic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };

    this.handleSongClick = this.handleSongClick.bind(this);
  }
  componentWillMount() {
    fetch('/newest', {method: 'GET'}).then(
      res => res.ok ? res.json() : undefined,
      e => console.log("连接失败", e)
    ).then(json => {
      if (json) {
        this.setState({songs: json.songs});
      }
    });
  }

  list() {
    const data = this.state.songs;
    if (data.length === 0) {
      for (let i = 0; i < 20; i++) {
        data.push(i);
      }
    }

    return data.map((v, i) => {
      const song = (v.id) ? v : df;
      return (
        <ListItem
          key={v.id || 'newest-' + i}
          onClick={() => this.handleSongClick(song.id)}
          style={(i % 2 === 0) ? {} : {backgroundColor: '#f2f2f2'}}>
          <div style={styles.item}>
            <span style={styles.index}>
              {i < 9 ? '0' + (i + 1) : '' + (i + 1)}</span>
            <div style={styles.name}>
              {song.name}
            </div>
            <span style={styles.singer}>
              {song.singer}
            </span>
            <span style={styles.index}>
              {song.time}
            </span>
          </div>
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
    fontSize: 18,
    fontWeight: '400',
    overflow: 'hidden',
  },
  singer: {
    color: '#999',
    width: 200,
    overflow: 'hidden',
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

export default connect(null, mapDispatchToProps)(NewestMusic);
