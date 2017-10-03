import React from 'react'
import { connect } from 'react-redux'
import { setSubj } from '../../actions'
import { SUBJECTS } from '../../common/strings'

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
          <Subheader>{SUBJECTS[0].HEADER}</Subheader>
          {SUBJECTS[0].ITEMS.map((v) =>
            <ListItem
              key={'sider-' + v}
              value={v}
              primaryText={v}
              leftIcon={<MusicNote />} />
          )}
        </SelectableList>
        <Divider />
        <SelectableList
          value={ subj }
          onChange={(event, index) => this.props.setSubj(index)}>
          <Subheader>{SUBJECTS[1].HEADER}</Subheader>
          {SUBJECTS[1].ITEMS.map((v) =>
            <ListItem
              key={'sider-' + v}
              value={v}
              primaryText={v}
              leftIcon={<Upload />}/>
          )}
        </SelectableList>
        <Divider />
        <SelectableList
          value={ subj }
          onChange={(event, index) => this.props.setSubj(index)}>
          <Subheader style={ styles.createHeader }>
            {SUBJECTS[2].HEADER}
            <IconButton tooltip="创建">
              <AddCircle color="#aaa" hoverColor="#666" />
            </IconButton>
          </Subheader>
          {SUBJECTS[2].ITEMS.map((v) =>
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
