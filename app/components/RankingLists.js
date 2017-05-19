import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from './Subheader.js';

class RankingLists extends React.Component {
  riseList() {
    let data = [];
    for (let i = 1; i <= 8; i++) {
      data.push('0' + i);
    }

    return data.map((v, i) => {
      return (
        <ListItem
          key={v}
          style={(i % 2 === 0) ? {} : {backgroundColor: '#f2f2f2'}}>
          <span style={{marginRight: 16, color: '#999'}}>{v}</span>
          <span style={{marginRight: 16, color: '#444'}}>
            Time to say goodbye</span>
          <span style={{position: 'absolute', right: 16, color: '#999'}}>
            Lambda</span>
        </ListItem>
      );
    });
  }

  lists() {
    const data = ['飙升榜', '新歌榜', '热歌榜', '歌手榜'];
    return data.map((v) => {
      return (
        <List key={v} style={styles.list}>
          <Subheader title={v} />
          <Divider />
          {this.riseList()}
        </List>
      );
    });
  }

  render() {
    return (
      <div style={styles.container}>
        {this.lists()}
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 24,
  },
  list: {
    width: 360,
    height: 413,

    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,

    margin: 16,
  },
};

export default RankingLists;
