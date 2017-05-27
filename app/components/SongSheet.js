import React from 'react';
import {connect} from 'react-redux';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

const df = {
  name: '默认歌单',
  img: '/img/0.png',
  creator: '__jln',
  date: '2016-12-17',
  description: '山不在高，有仙则灵。水不在深，有龙则灵。',
};

class SongSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentWillMount() {
    fetch('/songSheet', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-from-urlencoded'
      },
      body: `id=${this.props.sheet}&username=${this.props.username}`
    }).then(
      res => res.ok ? res.json() : undefined,
      e => console.log('连接失败', e)
    ).then(json => {
      if (json) {
        this.setState({
          name: json.name,
          img: json.img,
          creator: json.creator,
          description: json.description,
          songs: json.songs
        });
      }
    });
  }

  header() {
    const data = ['序号', '音乐标题', '歌手', '专辑', '时长'];
    return data.map((v) => {
      return <TableHeaderColumn key={v}>{v}</TableHeaderColumn>;
    });
  }

  rowColumns(data) {
    return data.map(v => {
      return <TableRowColumn key={v}>{v}</TableRowColumn>;
    });
  }

  tableRow() {
    const songs = this.state.songs;
    return songs.map((v, i) => {
      const song = [i + 1, v.name, v.singer, v.album, v.time];
      return (
    		<TableRow key={v.id}>
          {this.rowColumns(song)}
    		</TableRow>
      );
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.info}>
          <div style={styles.imgContainer}>
            <img alt="" src={this.state.img || df.img}/>
          </div>
          <div style={styles.descriptionBox}>
            <div style={{fontSize: 26}}>{this.state.name || df.name}</div>
            <div style={styles.creator}>
              {this.state.creator || df.creator}&nbsp;&nbsp;&nbsp;
              {this.state.date || df.date}创建
            </div>
            <div style={styles.description}>
              简介：{this.state.description || df.description}
            </div>
          </div>
        </div>
        <div style={styles.songList}>
          <Subheader>歌曲列表</Subheader>
          <Divider />
					<Table>
    				<TableHeader
              displaySelectAll={false}
            	adjustForCheckbox={false}>
    				  <TableRow>{this.header()}</TableRow>
    				</TableHeader>
    				<TableBody
              displayRowCheckbox={false}>
              {this.tableRow()}
    				</TableBody>
  				</Table>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: 820,
    height: 600,
    backgroundColor: '#f6f6f6',
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
  info: {
    width: 770,
    height: 200,
    margin: 20,
    display: 'flex',
  },
  songList: {
    width: '100%',
    marginTop: 20,
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 196,
    height: 196,
    marginTop: 1,
    border: '1px solid #ccc',
    overflow: 'hidden',
  },
  descriptionBox: {
    color: '#666',
    marginLeft: 30,
  },
  creator: {
    marginTop: 12,
  },
  description: {
    marginTop: 40,
    marginRight: 50,
  },
};

const mapStateToProps = (state, ownProps) => {
  return {
    sheet: (ownProps.type === 'mine')
      ? 'mine'
      : state.songSheet,
    username: state.username
  };
};

export default connect(mapStateToProps)(SongSheet);
