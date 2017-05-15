import React from 'react';

import Card from './Card';
import Divider from 'material-ui/Divider';

class SingerList extends React.Component {
  tabs() {
    let data = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('');


    return data.map((v, i) => {
      if (i === 0) {
        return (<span key={v}>热门</span>);
      }
      return (<span key={v}>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>{v}</span></span>);
    });
  }

  Cards() {
    let data = [];

    for (let i = 0; i < 20; i++) {
      data.push(i);
    }

    return data.map((v) => {
      return (<Card key={v}></Card>);
    });
  }


  render() {
    return (
      <div style={styles.container}>
        <div style={styles.tabs}>
          筛选： {this.tabs()}
        </div>
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
    marginTop: 24,
  },
  tabs: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 15,
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 12,
  },
};

export default SingerList;
