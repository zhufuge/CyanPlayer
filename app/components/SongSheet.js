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

class SongSheet extends React.Component {
  header() {
    const data = ['序号', '音乐标题', '歌手', '专辑', '时长', '下载时间'];
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
    const data = ['童话镇', '成都', '我的主题曲', '叹服', 'Faded'];
    return data.map((v, i) => {
      const value = [i + 1, v, '---', '---', '---', '---'];
      return (
    		<TableRow key={v}>
          {this.rowColumns(value)}
    		</TableRow>
      );
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.info}>
          <div style={styles.imgContainer}>
            <img alt="" src="/img/0.png"/>
          </div>
          <div style={styles.description}>
            <div style={{fontSize: 26}}>{this.props.sheet}</div>
            <div>__jln&nbsp;&nbsp;&nbsp;2016-12-09创建</div>
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
  description: {
    color: '#666',
    marginLeft: 30,
  },
};

const mapStateToProps = (state, ownProps) => {
  return {
    sheet: (ownProps.type === 'mine')
      ? '我喜欢的音乐'
      : state.songSheet
  };
};

export default connect(mapStateToProps)(SongSheet);
