import React from 'react'
import { connect } from 'react-redux'
import { setSrc } from '../../actions'
import Ajax from '../../common/Ajax'

import RaisedButton from 'material-ui/RaisedButton'
import Favorite from 'material-ui/svg-icons/action/favorite'
import FileDownload from 'material-ui/svg-icons/file/file-download'
import CreateNewFolder from 'material-ui/svg-icons/file/create-new-folder'

const DEFAULT = {
  name: 'Time to say goodbye',
  album: '...',
  singer: 'Lauren',
  lrc: '...',
  img: '/img/0.png',
  audio: '/music/TimeToSayGoodbye.mp3',
}


class Song extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    Ajax('song', this.props.song).then(json => {
      if (json) {
        this.setState(Object.assign({}, json))
        this.props.setSrc(json.audio)
        return Ajax('lrc', json.lrc)
      } else {
        return ''
      }
    }).then(text => {
      this.setState({
        lrc: text,
      })
    })
  }

  tolrc(lrc) {
    lrc = lrc.toString().split('\r\n')
    //const time = lrc.map(v => v.match(/\[(..:..\...)\]/)[1])
    lrc = lrc.map(v => (v.match(/\[.*\](.*)/) || [''])[1])

    return lrc.map(v =>
      <p style={styles.lrcp}>{v}</p>
    )
  }

  render() {
    const song = (this.state.name) ? this.state : DEFAULT
    return (
      <div style={styles.container}>
        <div style={styles.main}>
          <div style={styles.left}>
            <div className="flex-c-c" style={styles.imgContainer}>
            <img alt="" src={this.state.img || DEFAULT.img}/>
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
  download={song.audio.slice(song.audio.lastIndexOf('/') + 1)}
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
            <div style={styles.lrc}>
              {this.tolrc(song.lrc)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    margin: '54px 0',
    overflowX: 'hidden',
    overflowY: 'scroll',
    width: '100%',
  },
  main: {
    display: 'flex',
    margin: '0 auto',
    maxWidth: 980,
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
    song: state.song,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSrc: (src) => dispatch(setSrc(src))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Song)
