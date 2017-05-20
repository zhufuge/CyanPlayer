import React from 'react';
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
		return(
			<div style={styles.container}>
				<div style={styles.downloadList}>
					<Subheader style={{fontSize: 20}}>已下载的单曲</Subheader>
					<Divider />
					<Table>
    				<TableHeader displaySelectAll={false}
            						 adjustForCheckbox={false}>
    				  <TableRow>{this.header()}</TableRow>
    				</TableHeader>
    				<TableBody  displayRowCheckbox={false}>
              {this.tableRow()}
    				</TableBody>
  				</Table>
  			</div>
			</div>);
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
  downloadList: {
    width: '100%',
    marginTop: 20,
  },
};

export default DownloadList;
