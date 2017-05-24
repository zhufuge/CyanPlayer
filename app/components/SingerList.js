import React from 'react';

import Card from './Card';

class SingerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singers: []
    };
  }
  componentWillMount() {
    fetch('/singers', {
      method: 'GET',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(
      res => (res.ok) ? res.json() : undefined,
      e => console.log("连接失败", e)
    ).then(json => {
      if (json) {
        this.setState({
          singers: json.singers,
        });
      }
    });
  }

  Cards() {
    const container = this.state.singers;
    if (container.length === 0) {
      for (let i = 0; i < 20; i++) {
        container.push(i);
      }
    }

    return container.map((v, i) => {
      return (
        <Card
          key={'singer-list-' + i}
          value={v.name}
          onClick={() => {alert("jump to SongSheet");}}
          src={v.src}/>
      );
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
