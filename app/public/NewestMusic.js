import React from 'react';

import {List, ListItem} from 'material-ui/List';

class NewestMusic extends React.Component {
  list() {
    let data = [];
    for (let i = 0; i < 16; i++) {
      data.push(i);
    }

    return data.map((v) => {
      return (<ListItem key={v} primaryText={v + 1}/>);
    });
  }

  render() {
    return (
      <List style={styles.list}>
        {this.list()}
      </List>
    );
  }
}

const styles = {
  list: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'solid',
    marginTop: 16,
    marginBottom: 16,
  },
};

export default NewestMusic;
