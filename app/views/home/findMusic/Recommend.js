import React from 'react'
import { connect } from 'react-redux'
import { setPresentSong, setHomeSubj, setSongSheet } from '../../../actions'
import Ajax from '../../../common/Ajax'

import Divider from 'material-ui/Divider'
import Subheader from './Subheader'
import CardPane from './CardPane'
import List from './RecommendList'


const DEFAULT = {
  sheets: Array(8).fill(0).map((v, i) => i),
  songs: Array(10).fill(0).map((v, i) => i),
  singers: Array(8).fill(0).map((v, i) => i),
}

class Recommend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sheets: DEFAULT.sheets,
      songs: DEFAULT.songs,
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
    this.props.setHomeSubj('6')
  }

  handleSongClick(song) {
    this.props.setPresentSong(song)
    this.props.setHomeSubj('2')
  }

  render() {
    const state = this.state
    return (
      <div style={styles.container}>
        <Subheader title="推荐歌单" onClick={() => this.props.setTab('b')}/>
        <Divider />
        <CardPane
          Items={state.sheets}
          onClickItem={(s) => this.handleSheetClick(s)} />
        <Subheader title="推荐音乐" onClick={() => this.props.setTab('e')}/>
        <Divider />
        <div style={styles.songs}>
          <List
            Items={state.songs.filter((v, i, s) => i < s.length / 2)}
            start={1}
            onClickItem={(s) => this.handleSongClick(s)}/>
          <List
            Items={state.songs.filter((v, i, s) => i >= s.length / 2)}
            start={6}
            onClickItem={(s) => this.handleSongClick(s)}/>
        </div>
        <Subheader title="推荐歌手" onClick={() => this.props.setTab('d')}/>
        <Divider />
        <CardPane
          Items={state.singers}
          onClickItem={(s) => this.handleSheetClick(s)} />
      </div>
    )
  }
}

const styles = {
  container: {
    marginTop: 26,
  },
  songs: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    margin: '16px auto 36px',
  },
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPresentSong: (song) => dispatch(setPresentSong(song)),
    setSongSheet: (sheet) => dispatch(setSongSheet(sheet)),
    setHomeSubj: (subj) => dispatch(setHomeSubj(subj)),
  }
}

export default connect(null, mapDispatchToProps)(Recommend)
