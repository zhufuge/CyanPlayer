import React from 'react';

import {List, ListItem} from 'material-ui/List';

class NewestMusic extends React.Component {
  list() {
    let data = [];
    for (let i = 1; i <= 16; i++) {
      data.push((i < 10) ? '0' + i : '' + i);
    }

    return data.map((v, i) => {
      return (
        <ListItem
          key={v}
          style={(i % 2 === 0) ? {} : {backgroundColor: '#f2f2f2'}}>
          <div style={styles.item}>
            <span style={styles.index}>{v}</span>
            <div style={styles.name}>
              Time to say goodbye</div>
            <span style={styles.singer}>
              Lambda</span>
            <span style={styles.index}>03:23</span>
          </div>
        </ListItem>
      );
    });
  }

  render() {
    return (
      <List style={styles.container}>
        {this.list()}
      </List>
    );
  }
}

const styles = {
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'solid',
    margin: 20,
    marginLeft: 0,
  },
  item: {
    display: 'flex',
  },
  index: {
    marginRight: 30,
    color: '#666',
  },
  name: {
    display: 'inline',
    color: '#333',
    width: 400,
    height: 22,
    fontSize: 20,
    fontWeight: '400',
    overflow: 'hidden',
  },
  singer: {
    color: '#999',
    width: 200,
    overflow: 'hidden',
  },
};

export default NewestMusic;
