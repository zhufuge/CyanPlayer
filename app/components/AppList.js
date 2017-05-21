import React from 'react';

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
    this.state = {
      selectedIndex: props.page,
    };
    this.handleRequestChange = this.handleRequestChange.bind(this);
  }

  handleRequestChange(event, index) {
    this.setState({selectedIndex: index});
    this.props.setPage(index);
  };

  render() {
    const musicNote = <MusicNote />,
          musicVideo = <MusicVideo />,
          upload = <Upload />,
          restore = <Restore />,
          queueMusic = <QueueMusic />;
    return (
      <div style={styles.container}>
        <SelectableList
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}>
          <Subheader>推荐</Subheader>
          <ListItem value="0" primaryText="发现音乐" leftIcon={musicNote}/>
          <ListItem value="1" primaryText="随机音乐" leftIcon={musicVideo}/>
        </SelectableList>
        <Divider />
        <SelectableList
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}>
          <Subheader>我的音乐</Subheader>
          <ListItem value="2" primaryText="正在播放" leftIcon={musicNote}/>
          <ListItem value="3" primaryText="上传音乐" leftIcon={upload}/>
          <ListItem value="4" primaryText="历史下载" leftIcon={restore}/>
        </SelectableList>
        <Divider />
        <Subheader style={styles.createHeader}>
          创建的歌单
          <IconButton tooltip="创建">
            <AddCircle color="#aaa" hoverColor="#666" /></IconButton>
        </Subheader>
        <SelectableList
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}>
          <ListItem value="5" primaryText="我喜欢的音乐" leftIcon={queueMusic}/>
        </SelectableList>
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

export default AppList;
