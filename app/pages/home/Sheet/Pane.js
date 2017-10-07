import React from 'react'
import { connect } from 'react-redux'
import Ajax from '../../../common/Ajax'
import { SHEET } from '../../../strings'

import ButtonGroup from '../../../components/ButtonGroup'
import Avatar from 'material-ui/Avatar'

class Pane extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    Ajax('sheet', this.props.sheet, this.props.username).then(
      json => json && this.setState(Object({}, json))
    )
  }

  render() {
    return (
      <div style={styles.container}>
        <div className="flex-c-c" style={styles.imgContainer}>
          <img alt="" src={this.state.img || SHEET.IMG}/>
        </div>
        <div style={styles.descriptions}>
          <div style={styles.title}>{this.state.name || SHEET.NAME}</div>
          <div className="flex-s-c" style={styles.subTitle}>
            <Avatar size={30}>L</Avatar>
            <div style={styles.creator}>
              {this.state.creator || SHEET.CREATOR}
            </div>
            <div style={styles.date}>
              {this.state.date || SHEET.DATE}创建
            </div>
          </div>
          <div className="flex-s-c" style={styles.buttons}>
            <ButtonGroup>
              <div style={styles.bText} value="playAll">播放全部</div>
              <div style={styles.bText} value="add">+</div>
            </ButtonGroup>
            <ButtonGroup style={{ marginLeft: 12 }} >
              <div style={styles.bText} value="collect">收藏</div>
            </ButtonGroup>
            <ButtonGroup style={{ marginLeft: 12 }} >
              <div style={styles.bText} value="share">分享</div>
            </ButtonGroup>
            <ButtonGroup style={{ marginLeft: 12 }} >
              <div style={styles.bText} value="downloadAll">下载全部</div>
            </ButtonGroup>
          </div>
          <div style={styles.tags}>
            标签：
          </div>
          <div style={styles.description}>
            简介：{this.state.description || SHEET.DESCRIPTION}
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    height: 240,
    margin: '32px 0 28px',
    display: 'flex',
  },
  imgContainer: {
    width: 216,
    height: 216,
    border: '1px solid #fafafa',
    boxShadow: '0 0 1px #eee',
    overflow: 'hidden',
  },
  descriptions: {
    color: '#666',
    marginLeft: 26,
  },
  title: {
    fontSize: 24,
  },
  subTitle: {
    margin: '12px 0',
  },
  creator: {
    margin: '0 10px',
    fontSize: 15,
    color: '#888',
  },
  date: {
    margin: '0 10px',
    fontSize: 13,
    color: '#999',
  },
  buttons: {
    height: 42,
  },
  bText: {
    margin: '0 12px',
  },
  tags: {
    fontSize: 14,
    margin: '10px 0',
  },
  description: {
    fontSize: 14,
    margin: '10px 0',
  },
}

const mapStateToProps = (state, ownProps) => {
  return {
    sheet: state.sheet,
    username: state.username,
  }
}

export default connect(mapStateToProps)(Pane)
