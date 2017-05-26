import React from 'react';
import {connect} from 'react-redux';
import {setPage} from '../actions';

import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';

import MusicNote from 'material-ui/svg-icons/image/music-note';
import MusicVideo from 'material-ui/svg-icons/av/music-video';
import QueueMusic from 'material-ui/svg-icons/av/queue-music';
import Upload from 'material-ui/svg-icons/file/cloud-upload';
import Restore from 'material-ui/svg-icons/action/restore';
import AddCircle from 'material-ui/svg-icons/content/add-circle';

let SelectableList = makeSelectable(List);

class AppList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestChange = this.handleRequestChange.bind(this);
  }

  handleRequestChange(event, index) {
    this.props.setPage(index);
  };

  renderRecommend() {
    const page = this.props.page,
          musicNote = <MusicNote />,
          musicVideo = <MusicVideo />;
    return (
      <SelectableList
        value={page}
        onChange={this.handleRequestChange}>
        <Subheader>推荐</Subheader>
        <ListItem value="0" primaryText="发现音乐" leftIcon={musicNote}/>
        <ListItem value="1" primaryText="随机音乐" leftIcon={musicVideo}/>
      </SelectableList>
    );
  }

  renderMyMusic() {
    const page = this.props.page,
          musicNote = <MusicNote />,
          upload = <Upload />,
          restore = <Restore />,
          queueMusic = <QueueMusic />;
    return (this.props.username === '登录')
      ? (
        <SelectableList
          value={page}
          onChange={this.handleRequestChange}>
          <Subheader>我的音乐</Subheader>
          <ListItem value="2" primaryText="当前音乐" leftIcon={musicNote}/>
        </SelectableList>
      )
    : (
      <SelectableList
        value={page}
        onChange={this.handleRequestChange}>
        <Subheader>我的音乐</Subheader>
        <ListItem value="2" primaryText="当前音乐" leftIcon={musicNote}/>
        <ListItem value="3" primaryText="上传音乐" leftIcon={upload}/>
        <ListItem value="4" primaryText="历史下载" leftIcon={restore}/>
      </SelectableList>
    );
  }

  renderCreateSheet() {
    if (this.props.username === '登录') {
      return ([]);
    }
    const page = this.props.page,
          queueMusic = <QueueMusic />;
    return (
        <SelectableList
          value={page}
          onChange={this.handleRequestChange}>
          <Subheader style={styles.createHeader}>
            创建的歌单
            <IconButton tooltip="创建">
              <AddCircle color="#aaa" hoverColor="#666" /></IconButton>
          </Subheader>
          <ListItem value="5" primaryText="我喜欢的音乐" leftIcon={queueMusic}/>
        </SelectableList>
    );
  }

  render() {
    return (
      <div style={styles.container}>
        {this.renderRecommend()}
        <Divider />
        {this.renderMyMusic()}
        <Divider />
        {this.renderCreateSheet()}
      </div>
    );
  }
}

const styles = {
  container: {
    width: 240,
    height: 600,
    marginRight: 16,
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
};

const mapStateToProps = (state) => {
  return {
    page: state.page,
    username: state.username
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (page) => {
      dispatch(setPage(page));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppList);
