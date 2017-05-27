import React from 'react';
import {connect} from 'react-redux';
import {setPage, setSongSheet} from '../actions';

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

    this.handleSheetClick = this.handleSheetClick.bind(this);
  }
  componentWillMount() {
    fetch('/songSheets', {method: 'GET'}).then(
      res => (res.ok) ? res.json() : undefined,
      e => console.log("连接失败", e)
    ).then(json => {
      if (json) {
        this.setState({songSheets: json.songSheets});
      }
    });
  }

  Cards() {
    const container = this.state.songSheets;
    if (container.length === 0) {
      for (let i = 0; i < 20; i++) {
        container.push(i);
      }
    }

    return container.map((v, i) => {
      return (
        <Card
          key={v.id || 'songSheets-' + i}
          value={v.name}
          onClick={() => this.handleSheetClick(v.id || '默认歌单')}
          src={v.src}/>
      );
    });
  }

  handleSheetClick(sheet) {
    this.props.setSongSheet(sheet);
    this.props.setPage('6');
  }

  filterSheet(e, v) {
    e.preventDefault();
  }

  tabs() {
    const container = [ '华语', '流行', '电子', '轻音乐', 'ACG', '其他'];
    return container.map((v, i) => {
      return (
        <Span key={'songSheets' + v}>
          {(i === 0) ? '' : '/'}
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

export default connect(null, mapDispatchToProps)(SongSheets);
