import React from 'react';

import Card from './Card';
import Divider from 'material-ui/Divider';

const Span = (props) => (
  <span style={{marginLeft: 10}}>{props.children}</span>
);

class SongSheets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songSheets: [],
    };
  }

  componentDidMount() {
    fetch('/songSheets', {
      method: 'GET',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(
      (res) => (res.ok) ? res.json() : {songSheets: []},
      (e) => console.log("连接失败", e)
    ).then(json => {
      this.setState({
        songSheets: json.songSheets,
      });
    });
  }

  Cards() {
    let data = this.state.songSheets;

    if (data.length === 0) {
      for (let i = 0; i < 20; i++) {
        data.push(i);
      }
    }

    return data.map((v) => {
      return (
        <Card
          key={v[0] + v[1]}
          value={v[0]}
          onClick={() => {alert("jump to SongSheet");}}
          src={v[1]}/>
      );
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
