import React from 'react';

import Card from './Card';

class SingerList extends React.Component {
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
