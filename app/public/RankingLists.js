import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from './Subheader.js';

class RankingList extends React.Component {
  riseList() {
    let data = [];
    for (let i = 0; i < 8; i++) {
      data.push(i);
    }

    return data.map((v) => {
      return (<ListItem key={v} primaryText={v + 1}/>);
    });
  }

  render() {
    return (
      <List style={styles.list}>
        <Subheader title="飙升榜" />
        <Divider />
        {this.riseList()}
      </List>

    );
  }
}

class RankingLists extends React.Component {
  lists() {
    let data = [];
    for (let i = 0; i < 4; i++) {
      data.push(i);
    }

    return data.map((v) => {
      return (<RankingList key={v} />);
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
