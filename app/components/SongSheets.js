import React from 'react';

import Card from './Card';
import Divider from 'material-ui/Divider';

const Span = (props) => (
  <span style={{marginLeft: 10}}>{props.children}</span>
);

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

  filterSheet(e, v) {
    e.preventDefault();
  }

  tabs() {
    const data = [ '华语', '流行', '电子', '轻音乐', 'ACG', '其他'];
    return data.map((v, i) => {
      return (
        <Span key={v}>{(i === 0) ? '' : '/'}
          <Span>
            <a href="#"
               style={{textDecoration: 'none', color: '#666'}}
               onClick={(e) => this.filterSheet(e, v)}>{v}</a>
          </Span>
        </Span>
      );
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
    color: '#333',
  },
  marginl: {

  }
};

export default SongSheets;
