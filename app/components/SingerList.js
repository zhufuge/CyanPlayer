import React from 'react';
import {connect} from 'react-redux';
import {setPage, setSongSheet} from '../actions';

import Card from './Card';

class SingerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singers: []
    };
    this.handleSingerClick = this.handleSingerClick.bind(this);
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
          onClick={() => this.handleSingerClick(v.name || '未命名歌单')}
          src={v.src}/>
      );
    });
  }

  handleSingerClick(singer) {
    this.props.setSongSheet(singer);
    this.props.setPage('6');
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

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (page) => {
      dispatch(setPage(page));
    },
    setSongSheet: (sheet) => {
      dispatch(setSongSheet(sheet));
    }
  };
};

export default connect(null, mapDispatchToProps)(SingerList);
