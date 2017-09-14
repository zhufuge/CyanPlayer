import React from 'react'
import { connect } from 'react-redux'
import { setPresentSongSrc } from '../../actions'
import Ajax from '../../common/Ajax'

import RaisedButton from 'material-ui/RaisedButton'
import Favorite from 'material-ui/svg-icons/action/favorite'
import FileDownload from 'material-ui/svg-icons/file/file-download'
import CreateNewFolder from 'material-ui/svg-icons/file/create-new-folder'

const primary = {
  name: 'Time to say goodbye',
  album: '...',
  singer: 'Lauren',
  lrc: '...',
  img: '/img/0.png',
  audio: '/music/TimeToSayGoodbye.mp3',
}

function basefile(filepath) {
  const index = filepath.lastIndexOf('/')
  return (index === -1) ? filepath : filepath.slice(index + 1)
}

class SongCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    Ajax('song')(this.props.song).then(json => {
      if (json) {
        this.setState({
          name: json.name,
          album: json.album,
          singer: json.singer,
          img: json.img,
          audio: json.audio,
        })
        this.props.setPresentSongSrc(json.audio)
        return Ajax('lrc')(json.lrc)
      } else {
        return ''
      }
    }).then(text => {
      this.setState({
        lrc: text,
      })
    })
  }

  displayLrc(lrc) {
    const e = /\[..:..\...\](.*)\r\n/g
    const container = []
    let match
    while ((match = e.exec(lrc)) !== null) {
      container.push(match[1])
    }

    const data = (container.length === 0)
          ? (<p style={styles.lrcp}>lrc</p>)
          : (container.map(v => <p key={v} style={styles.lrcp}>{v}</p>))

    return (
        <div style={styles.lrc}>
          {data}
        </div>
    )
  }

  render() {
    const song = (this.state.name) ? this.state : primary
    return (
      <div style={styles.container}>
        <div style={styles.left}>
          <div className="flex-c-c" style={styles.imgContainer}>
            <img alt="" src={this.state.img || primary.img}/>
          </div>
          <div style={styles.operation}>
            <RaisedButton
              label="喜欢"
              primary={true}
              icon={<Favorite />}/>
            <RaisedButton
              label="收藏"
              primary={true}
              icon={<CreateNewFolder />}/>
            <RaisedButton
              href={song.audio}
              download={basefile(song.audio)}
              label="下载"
              primary={true}
              icon={<FileDownload />}/>
          </div>
        </div>
        <div style={styles.right}>
          <div style={styles.songName}>
            {song.name}
          </div>
          <div style={styles.songInfo}>
            <div>专辑：{song.album}</div>
            <div>歌手：{song.singer}</div>
          </div>
          {this.displayLrc(song.lrc)}
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    width: 820,
    height: 600,
    display: 'flex',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    margin: 15,
    width: 320,
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    margin: 15,
    width: 420,
  },
  imgContainer: {
    width: 300,
    height: 300,
    overflow: 'hidden',
    marginTop: 90,
    marginBottom: 20,
    marginLeft: 10,
    border: '1px solid #666',
    borderRadius: 6,
  },
  operation: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  songName: {
    fontSize: 26,
    color: '#666',
  },
  songInfo: {
    marginTop: 10,
    marginBottom: 24,
    paddingRight: 30,
    display: 'flex',
    justifyContent: 'space-between',
    color: '#666',
    fontSize: 14,
  },
  lrc: {
    width: '100%',
    height: 420,
    backgroundColor: '#f0f0f0',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  lrcp: {
    textAlign: 'center',
  },
}

const mapStateToProps = (state, ownProps) => {
  return {
    song: (ownProps.type === 'random') ? '0' : state.presentSong
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPresentSongSrc: (src) => dispatch(setPresentSongSrc(src))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongCard)
