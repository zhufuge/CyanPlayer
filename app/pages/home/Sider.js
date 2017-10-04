import React from 'react'
import { connect } from 'react-redux'
import { setSubj } from '../../actions'
import { SUBJECTS, SHEETLIST } from '../../strings'

import { List, ListItem, makeSelectable } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import SongPane from './SongPane'

import MusicNote from 'material-ui/svg-icons/image/music-note'
import MusicVideo from 'material-ui/svg-icons/av/music-video'
import QueueMusic from 'material-ui/svg-icons/av/queue-music'
import Upload from 'material-ui/svg-icons/file/cloud-upload'
import Restore from 'material-ui/svg-icons/action/history'
import AddCircle from 'material-ui/svg-icons/content/add-circle'

let SelectableList = makeSelectable(List)

class Sider extends React.Component {
  render() {
    const subj = this.props.subj
    return (
      <div style={Object.assign({}, this.props.style, styles.container)}>
        <SelectableList
          value={subj}
          onChange={(event, index) => this.props.setSubj(index)}>
          <Subheader>{SUBJECTS.HEADERS[0]}</Subheader>
          <ListItem
            key={'sider-' + SUBJECTS.FINDMUSIC}
            value={SUBJECTS.FINDMUSIC}
            primaryText={SUBJECTS.FINDMUSIC}
            leftIcon={<MusicNote />} />
        </SelectableList>
        <Divider />
        <SelectableList
          value={ subj }
          onChange={(event, index) => this.props.setSubj(index)}>
          <Subheader>{SUBJECTS.HEADERS[1]}</Subheader>
          <ListItem
            key={'sider-' + SUBJECTS.UPLOAD}
            value={SUBJECTS.UPLOAD}
            primaryText={SUBJECTS.UPLOAD}
            leftIcon={<Upload />}/>
        </SelectableList>
        <Divider />
        <SelectableList
          value={ subj }
          onChange={(event, index) => this.props.setSubj(index)}>
          <Subheader style={ styles.createHeader }>
            {SUBJECTS.HEADERS[2]}
            <IconButton tooltip="创建">
              <AddCircle color="#aaa" hoverColor="#666" />
            </IconButton>
          </Subheader>
          {SHEETLIST.map((v) =>
            <ListItem
              key={'sider-' + v}
              value={v}
              primaryText={v}
              leftIcon={<QueueMusic />}/>
          )}
        </SelectableList>
        <div style={styles.bottom}><SongPane /></div>
      </div>
    )
  }
}

const styles = {
  container: {
    position: 'fixed',
    width: 230,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(217, 217, 217)',
    overflow: 'hidden',
   },
  createHeader: {
    paddingRight: 20,
    display: 'flex',
    justifyContent: 'space-between',
  },
  bottom: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
}

const mapStateToProps = (state) => {
  return {
    subj: state.homeSubj,
    username: state.username,
   }
 }

const mapDispatchToProps = (dispatch) => {
  return {
    setSubj: (subj) => dispatch(setSubj(subj)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sider)
