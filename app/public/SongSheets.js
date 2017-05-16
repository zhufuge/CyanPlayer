import React from 'react';

import Card from './Card';
import Divider from 'material-ui/Divider';

class SongSheets extends React.Component {

  Cards() {
    let data = [];

    for (let i = 0; i < 20; i++) {
      data.push(i);
    }

    return data.map((v) => {
      return (<Card key={v}></Card>);
    });
  }

  tabs() {
    let data = [ '华语', '流行', '电子', '轻音乐', 'ACG'];

    return data.map((v, i) => {
      if (i === 0) {
        return (<span key={v}>{v}</span>);
      }
      return (<span key={v}>&nbsp;&nbsp;/&nbsp;&nbsp;<span>{v}</span></span>);
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.tabs}>热门标签： {this.tabs()}</div>
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
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 12,
  },
  tabs: {
    margin: 8,
  },
};

export default SongSheets;
