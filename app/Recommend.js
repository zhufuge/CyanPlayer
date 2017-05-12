import React from 'react';

import Divider from 'material-ui/Divider';
import Subheader from './Subheader.js';

import Card from './Card.js';

class Recommend extends React.Component {

  Cards() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8];
    return data.map((v) => {
      return (<Card key={v}></Card>);
    });
  }

  render() {
    return (
      <div>
        <Subheader title="推荐歌单" />
        <Divider />
        <div style={styles.cards}>
          {this.Cards()}
        </div>
        <Subheader title="推荐音乐" />
        <Divider />
        <Subheader title="推荐歌手" />
        <Divider />
      </div>
    );
  }
}

const styles = {
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 12,
  },
};

export default Recommend;
