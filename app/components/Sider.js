import React from 'react'
import { connect } from 'react-redux'
import { setPage } from '../actions'

import { List, ListItem, makeSelectable } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'

import MusicNote from 'material-ui/svg-icons/image/music-note'
import MusicVideo from 'material-ui/svg-icons/av/music-video'
import QueueMusic from 'material-ui/svg-icons/av/queue-music'
import Upload from 'material-ui/svg-icons/file/cloud-upload'
import Restore from 'material-ui/svg-icons/action/history'
import AddCircle from 'material-ui/svg-icons/content/add-circle'

let SelectableList = makeSelectable(List)

class Sider extends React.Component {
  render() {
    const page = this.props.page
    return (
      <div style={ styles.container }>
        <SelectableList
          value={page}
          onChange={(event, index) => this.props.setPage(index)}>
          <Subheader>推荐</Subheader>
          <ListItem value="0" primaryText="发现音乐" leftIcon={<MusicNote />} />
          <ListItem value="1" primaryText="随机音乐" leftIcon={<MusicVideo />} />
        </SelectableList>
        <Divider />
        <SelectableList
          value={ page }
          onChange={ this.handleRequestChange }>
          <Subheader>我的音乐</Subheader>
          <ListItem value="2" primaryText="当前音乐" leftIcon={ <MusicNote /> }/>
          {(this.props.username === '登录') ? null : ([
             <ListItem value="3" primaryText="上传音乐" leftIcon={<Upload />}/>,
             <ListItem value="4" primaryText="历史下载" leftIcon={<Restore />}/>
          ])}
        </SelectableList>
        <Divider />
        {(this.props.username === '登录') ? null : (
           <SelectableList
             value={ page }
             onChange={ this.handleRequestChange }>
             <Subheader style={ styles.createHeader }>
               创建的歌单
               <IconButton tooltip="创建">
                 <AddCircle color="#aaa" hoverColor="#666" />
               </IconButton>
             </Subheader>
             <ListItem value="5" primaryText="我喜欢的音乐" leftIcon={<QueueMusic />}/>
           </SelectableList>
        )}
      </div>
    )
  }
}

const styles = {
  container: {
    position: 'fixed',
    left: 0,
    top: 54,
    width: 240,
    height: window.innerHeight - 54 - 54,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(217, 217, 217)',
    overflow: 'hidden',
   },
  createHeader: {
    paddingRight: 20,
    display: 'flex',
    justifyContent: 'space-between',
   }
 }

const mapStateToProps = (state) => {
  return {
    page: state.page,
    username: state.username,
   }
 }

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (page) => dispatch(setPage(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sider)
