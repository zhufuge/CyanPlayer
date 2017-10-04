import React from 'react'
import { connect } from 'react-redux'
import { setSubj } from '../../../actions'
import { SUBJECTS, SHEETLIST } from '../../../strings'

import IconButton from 'material-ui/IconButton'
import SubHeader from './SubHeader'
import Item from './Item'
import SongPane from './SongPane'

import MusicNote from 'material-ui/svg-icons/image/music-note'
import MusicVideo from 'material-ui/svg-icons/av/music-video'
import QueueMusic from 'material-ui/svg-icons/av/queue-music'
import Upload from 'material-ui/svg-icons/file/cloud-upload'
import Restore from 'material-ui/svg-icons/action/history'
import AddCircle from 'material-ui/svg-icons/content/add-circle'

class Sider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const subj = this.props.subj
    console.log(this.props.subj);
    return (
      <div style={Object.assign({}, this.props.style, styles.container)}>
        <div style={styles.section}>
          <SubHeader value={SUBJECTS.HEADERS[0]}/>
          <Item
            onClick={() => this.props.setSubj(SUBJECTS.FINDMUSIC)}
            selected={subj === SUBJECTS.FINDMUSIC}
            value={SUBJECTS.FINDMUSIC}
            icon={MusicNote}
          />
        </div>
        <div style={styles.section}>
          <SubHeader value={SUBJECTS.HEADERS[1]} />
          <Item
            onClick={() => this.props.setSubj(SUBJECTS.UPLOAD)}
            selected={subj === SUBJECTS.UPLOAD}
            value={SUBJECTS.UPLOAD}
            icon={Upload}
          />
        </div>
        <div style={styles.section}>
          <SubHeader value={SUBJECTS.HEADERS[2]}>
            <IconButton tooltip="创建">
              <AddCircle color="#aaa" hoverColor="#666" />
            </IconButton>
          </SubHeader>
          <Item
            onClick={() => this.props.setSubj(SUBJECTS.SHEET)}
            selected={subj === SUBJECTS.SHEET}
            value={SHEETLIST[0]}
            icon={QueueMusic}
          />
        </div>
        <div style={styles.bottom}><SongPane /></div>
      </div>
    )
  }
}

const styles = {
  container: {
    position: 'fixed',
    width: 230,
    borderWidth: 0,
    borderRightWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(217, 217, 217)',
    overflow: 'hidden',
  },
  section: {
    margin: '0 0 8px',
  },
  bottom: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
}

const mapStateToProps = (state) => {
  return {
    subj: state.subj,
    username: state.username,
   }
 }

const mapDispatchToProps = (dispatch) => {
  return {
    setSubj: (subj) => dispatch(setSubj(subj)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sider)
