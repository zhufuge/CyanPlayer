import React from 'react'
import { connect } from 'react-redux'
import { setSrc } from '../../actions'
import Ajax from '../../common/Ajax'
import { SONG } from '../../strings'
import { getFileName, splitLrcToStrings } from '../../common/util'

import RaisedButton from 'material-ui/RaisedButton'
import Favorite from 'material-ui/svg-icons/action/favorite'
import FileDownload from 'material-ui/svg-icons/file/file-download'
import CreateNewFolder from 'material-ui/svg-icons/file/create-new-folder'
import Share from 'material-ui/svg-icons/Social/share'

class MainPane extends React.Component {
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

  render() {
    return (
      <div style={styles.container}>
        <div className="flex-c-c" style={styles.left}>
          <RadiusWrapper total={3} layer={1} >
            <img style={styles.img} alt="" src={this.state.img || SONG.IMG}/>
          </RadiusWrapper>
          <div style={styles.operation}>
            <RaisedButton
              label="喜欢"
              icon={<Favorite />}/>
            <RaisedButton
              label="收藏"
              icon={<CreateNewFolder />}/>
            <RaisedButton
              href={this.state.audio || SONG.AUDIO}
              download={getFileName(this.state.audio || SONG.AUDIO)}
              label="下载"
              icon={<FileDownload />}/>
            <RaisedButton
              href={this.state.audio || SONG.AUDIO}
              download={getFileName(this.state.audio || SONG.AUDIO)}
              label="分享"
              icon={<Share />}/>
          </div>
        </div>
        <div style={styles.right}>
          <div style={styles.songName}>
            {this.state.name || SONG.NAME}
          </div>
          <div style={styles.songInfo}>
            <div>专辑：{this.state.album || SONG.ALBUM}</div>
            <div>歌手：{this.state.singer || SONG.SINGER}</div>
          </div>
          <div style={styles.lrc}>
            {splitLrcToStrings(this.state.lrc || SONG.LRC).map((v, i) =>
              <p key={v + i} style={styles.lrcp}>{v}</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const RadiusWrapper = (props) => {
  const size = 280 + (props.total - props.layer + 1) * 20
  const color = '#' +
         ((16 - props.layer * 2) % 16).toString(16).repeat(3)
  return (
    <div
      className="flex-c-c"
      style={{
        overflow: 'hidden',
        border: `20px solid ${color}`,
        borderRadius: size,
      }}>
      {
        (props.layer !== props.total)
        ? <RadiusWrapper {...props} layer={props.layer + 1}/>
        : props.children
      }
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    margin: '42px auto 0',
    maxWidth: 980,
    height: 500,
  },
  left: {
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '32px auto 18px',
  },
  img: {
    width: 240,
    height: 240,
    overflow: 'hidden',
  },
  operation: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    margin: '0 12px 0 64px',
    overflow: 'hidden',
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
    width: '90%',
    height: 410,
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  lrcp: {
//    textAlign: 'center',
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPane)
