import React from 'react'
import { connect } from 'react-redux'
import { setSong, setPage } from '../../actions'
import Ajax from '../../common/Ajax'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'

const df = {
  name: '默认歌单',
  img: '/img/0.png',
  creator: '__jln',
  date: '2016-12-17',
  description: '山不在高，有仙则灵。水不在深，有龙则灵。',
}

class SongSheet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }

  componentWillMount() {
    Ajax('sheet', this.props.sheet, this.props.username).then(json => {
      if (json) {
        this.setState({
          name: json.name,
          img: json.img,
          creator: json.creator,
          date: json.date,
          description: json.description,
          songs: json.songs
        })
      }
    })
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
    this.props.setPage('2')
  }

  render() {
    const sheet = (this.state.name) ? this.state : df
    return (
      <div style={styles.container}>
        <div style={styles.info}>
          <div className="flex-c-c" style={styles.imgContainer}>
            <img alt="" src={sheet.img}/>
          </div>
          <div style={styles.descriptionBox}>
            <div style={{ fontSize: 26 }}>{sheet.name}</div>
            <div style={styles.creator}>
              {sheet.creator}&nbsp;&nbsp;&nbsp;
              {sheet.date}创建
            </div>
            <div style={styles.description}>
              简介：{sheet.description}
            </div>
          </div>
        </div>
        <div style={styles.songList}>
          <Subheader>歌曲列表</Subheader>
          <Divider />
					<Table onRowSelection={(s) => this.handleRowSelected(s)}>
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}>
              <TableRow>
                {['序号', '音乐标题', '歌手', '专辑', '时长'].map((v) =>
                  <TableHeaderColumn key={v}>{v}</TableHeaderColumn>
                )}
              </TableRow>
            </TableHeader>
            <TableBody
              showRowHover={true}
              displayRowCheckbox={false}>
              {this.tableRow()}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    width: 820,
    height: 600,
    backgroundColor: '#f6f6f6',
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
  info: {
    width: 770,
    height: 200,
    margin: 20,
    display: 'flex',
  },
  songList: {
    width: '100%',
    marginTop: 20,
  },
  imgContainer: {
    width: 196,
    height: 196,
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
    setPage: (page) => dispatch(setPage(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongSheet)
