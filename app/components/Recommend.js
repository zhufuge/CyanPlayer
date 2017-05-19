import React from 'react';

import Divider from 'material-ui/Divider';
import Subheader from './Subheader.js';
import {List, ListItem} from 'material-ui/List';

import Card from './Card.js';

class Recommend extends React.Component {
  Cards() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8];
    return data.map((v) => {
      return (<Card key={v}></Card>);
    });
  }

  Songs(isFirst) {
    const data = isFirst
          ? ['01', '02', '03', '04', '05']
          : ['06', '07', '08', '09', '10'];
    return data.map((v, i) => {
      return (
        <ListItem
          key={'s' + v}
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

  render() {
    return (
      <div style={styles.container}>
        <Subheader title="推荐歌单" onClick={() => this.props.setTab('b')}/>
        <Divider />
        <div style={styles.cards}>
          {this.Cards()}
        </div>
        <Subheader title="推荐音乐" onClick={() => this.props.setTab('e')}/>
        <Divider />
        <div style={styles.songs}>
          <List style={styles.list}>
            {this.Songs(true)}
          </List>
          <List style={styles.list}>
            {this.Songs(false)}
          </List>
        </div>
        <Subheader title="推荐歌手" onClick={() => this.props.setTab('d')}/>
        <Divider />
        <div style={styles.cards}>
          {this.Cards()}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: 16,
    marginRight: 16,
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 24,
  },
  songs: {
    display: 'flex',
    marginTop: 16,
    marginBottom: 36,
  },
  list: {
    width: 396,
    height: 240,

    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,
  },
};

export default Recommend;
