import React from 'react'
import { connect } from 'react-redux'
import { setPresentSong, setPage, setSongSheet } from '../../actions'
import Ajax from '../../common/Ajax'

import Divider from 'material-ui/Divider'
import { List, ListItem } from 'material-ui/List'
import Subheader from '../../components/Subheader'
import Card from '../../components/Card'

const DEFAULT = {
  sheets: Array(8).fill(0).map((v, i) => i),
  singers: Array(8).fill(0).map((v, i) => i),
  song: {
    id: '001',
    name: "Time to say goodbye",
    singer: "Lauren Aquilina",
  }
}

class Recommend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sheets: DEFAULT.sheets,
      songs: [],
      singers: DEFAULT.singers,
    }
  }

  componentWillMount() {
    Ajax('recommend')().then(json => {
      if (json) {
        this.setState({
          sheets: json.sheets,
          songs: json.songs,
          singers: json.singers,
        })
      }
    })
  }

  handleSheetClick(sheet='默认歌单') {
    this.props.setSongSheet(sheet)
    this.props.setPage('6')
  }
  renderSongs(isLeft) {
    const data = this.state.songs,
      container = isLeft
                ? ['01', '02', '03', '04', '05']
                : ['06', '07', '08', '09', '10']

    return container.map((v, i) => {
      let song = (isLeft) ? data[i] : data[i + 5]
      song = (song === void 0) ? DEFAULT.song : song
      return (
        <ListItem
          key={'recommend-' + 'songs-'+ i}
          onClick={() => this.handleSongClick(song.id)}
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
      )
    })
  }
  handleSongClick(song) {
    this.props.setPresentSong(song)
    this.props.setPage('2')
  }

  render() {
    return (
      <div style={styles.container}>
        <Subheader title="推荐歌单" onClick={() => this.props.setTab('b')}/>
        <Divider />
        <div style={styles.cards}>
          {this.state.sheets.map((v, i) =>
            <Card
              key={'recommend-sheets-' + i + v.name}
              value={v.name}
              onClick={() => this.handleSheetClick(v.id)}
              src={v.src}/>
          )}
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
          {this.state.singers.map((v, i) =>
            <Card
              key={'recommend-singers-' + i + v.name}
              value={v.name}
              onClick={() => this.handleSheetClick(v.id)}
              src={v.src}/>
          )}
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    marginTop: 16,
    marginRight: 16,
  },
  cards: {
    /* TODO css-grid */
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
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
    borderColor: '#eee',
    borderStyle: 'solid',
    borderWidth: 1,
  },
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPresentSong: (song) => dispatch(setPresentSong(song)),
    setSongSheet: (sheet) => dispatch(setSongSheet(sheet)),
    setPage: (page) => dispatch(setPage(page)),
  }
}

export default connect(null, mapDispatchToProps)(Recommend)
