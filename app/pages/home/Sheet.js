import React from 'react'
import { connect } from 'react-redux'
import { setSong, setSubj } from '../../actions'
import Ajax from '../../common/Ajax'
import { SHEET } from '../../strings'

import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'

class SongSheet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }

  componentWillMount() {
    Ajax('sheet', this.props.sheet, this.props.username).then(
      json => json && this.setState(Object({}, json))
    )
  }

  tableRow() {
    const songs = this.state.songs
    return songs.map((v, i) => {
      const song = [i + 1, v.name, v.singer, v.album, v.time]
      return (
        <TableRow key={v.id}>
          {song.map(v => <TableRowColumn key={v}>{v}</TableRowColumn>)}
        </TableRow>
      )
    })
  }

  handleRowSelected(selected) {
    const index = parseInt(selected.toString())
    this.props.setSong(this.state.songs[index].id)
    this.props.setSubj('2')
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.info}>
          <div className="flex-c-c" style={styles.imgContainer}>
            <img alt="" src={this.state.img || SHEET.IMG}/>
          </div>
          <div style={styles.descriptionBox}>
            <div style={{ fontSize: 26 }}>{this.state.name || SHEET.NAME}</div>
            <div style={styles.creator}>
              {this.state.creator || SHEET.CREATOR}&nbsp;&nbsp;&nbsp;
              {this.state.date || SHEET.DATE}创建
            </div>
            <div style={styles.description}>
              简介：{this.state.description || SHEET.DESCRIPTION}
            </div>
          </div>
        </div>
        <div style={styles.songList}>
          <Subheader>歌曲列表</Subheader>
          <Divider />
          ['序号', '音乐标题', '歌手', '专辑', '时长']
        </div>
      </div>
    )
  }
}

const styles = {
  container: {},
  info: {
    height: 250,
    margin: '32px 0 28px',
    display: 'flex',
  },
  songList: {
  },
  imgContainer: {
    width: 226,
    height: 226,
    marginTop: 1,
    border: '1px solid #ccc',
    overflow: 'hidden',
  },
  descriptionBox: {
    color: '#666',
    marginLeft: 30,
  },
  creator: {
    marginTop: 12,
  },
  description: {
    marginTop: 40,
    marginRight: 50,
  },
}

const mapStateToProps = (state, ownProps) => {
  return {
    sheet: (ownProps.type === 'mine') ? '0' : state.sheet,
    username: state.username,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSong: (song) => dispatch(setSong(song)),
    setSubj: (subject) => dispatch(setSubj(subject)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongSheet)
