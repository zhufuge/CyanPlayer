import React from 'react'
import { connect } from 'react-redux'
import { setPresentSong, setPage } from '../../actions'
import Ajax from '../../common/Ajax'

import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'

class DownloadList extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {
      songs: []
    }
  }

  componentWillMount() {
    Ajax('downloadList')(this.props.username).then(json => {
      if (json) {
        this.setState({ songs: json.songs })
      }
    })
  }

  handleRowSelected(selected) {
    this.props.setPresentSong(this.state.songs[parseInt(selected.toString())].id)
    this.props.setPage('2')
  }

	render() {
		return(
			<div style={styles.container}>
				<div style={styles.downloadList}>
					<Subheader style={{ fontSize: 20 }}>已下载的单曲</Subheader>
					<Divider />
          {/* ['序号', '音乐标题', '歌手', '专辑', '时长', '下载时间'] */}
        </div>
			</div>
    )
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
}

const mapStateToProps = (state) => {
  return {
    username: state.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPresentSong: (song) => dispatch(setPresentSong(song)),
    setPage: (page) => dispatch(setPage(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadList)
