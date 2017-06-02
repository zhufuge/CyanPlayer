import React from 'react';
import {connect} from 'react-redux';
import {setPresentSong, setPage} from '../actions';

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

class DownloadList extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      songs: []
    };

    this.handleRowSelected = this.handleRowSelected.bind(this);
  }

  componentWillMount() {
    fetch(
      `/downloadList?username=${this.props.username}`,
      {method: "GET"}
    ).then(
      res => (res.ok) ? res.json() : undefined,
      e => console.log('连接失败', e)
    ).then(json => {
      if (json) {
        this.setState({
          songs: json.songs
        });
      }
    });
  }

  header() {
    const data = ['序号', '音乐标题', '歌手', '专辑', '时长', '下载时间'];
    return data.map(v => {
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
      const song = [i + 1, v.name, v.singer, v.album, v.time, v.date];
      return (
    		<TableRow key={v.id}>
          {this.rowColumns(song)}
    		</TableRow>
      );
    });
  }

  handleRowSelected(selected) {
    const index = parseInt(selected.toString());
    this.props.setPresentSong(this.state.songs[index].id);
    this.props.setPage('2');
  }

	render() {
		return(
			<div style={styles.container}>
				<div style={styles.downloadList}>
					<Subheader style={{fontSize: 20}}>已下载的单曲</Subheader>
					<Divider />
					<Table onRowSelection={this.handleRowSelected}>
    				<TableHeader
              displaySelectAll={false}
            	adjustForCheckbox={false}>
    				  <TableRow>{this.header()}</TableRow>
    				</TableHeader>
    				<TableBody
              showRowHover={true}
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
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
  downloadList: {
    width: '100%',
    marginTop: 20,
  },
};

const mapStateToProps = (state) => {
  return {
    username: state.username
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPresentSong: (song) => {
      dispatch(setPresentSong(song));
    },
    setPage: (page) => {
      dispatch(setPage(page));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DownloadList);
