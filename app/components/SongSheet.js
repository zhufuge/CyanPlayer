import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

class SongSheet extends React.Component {
  songs() {
    let data = '1234567890';
    data = data.split('');
    return data.map((v) => {
      return <ListItem key={'song' + v}>{v}</ListItem>;
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.info}>
          <div style={styles.imgContainer}>
            <img alt="" src="/img/0.png"/>
          </div>
          <div style={styles.description}>
            <div style={{fontSize: 26}}>我喜欢的音乐</div>
            <div>__jln&nbsp;&nbsp;&nbsp;2016-12-09创建</div>
          </div>
        </div>
        <div style={styles.songList}>
          <Subheader>歌曲列表</Subheader>
          <Divider />
          <List>
            {this.songs()}
          </List>
        </div>
      </div>
    );
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 196,
    height: 196,
    marginTop: 1,
    border: '1px solid #ccc',
    overflow: 'hidden',
  },
  description: {
    color: '#666',
    marginLeft: 30,
  },
};

export default SongSheet;
