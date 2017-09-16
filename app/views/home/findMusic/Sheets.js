import React from 'react'
import { connect } from 'react-redux'
import { setHomeSubj, setSongSheet } from '../../../actions'
import Ajax from '../../../common/Ajax'

import CardPane from './CardPane'
import Divider from 'material-ui/Divider'

const DEFAULT = {
  labels: [ '华语', '流行', '电子', '轻音乐', 'ACG', '其他'],
  sheets: Array(20).fill(false).map((v, i) => i),
}

class Sheets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sheets: DEFAULT.sheets,
    }
  }

  componentWillMount() {
    Ajax('songSheets')().then(json => {
      if (json) {
        this.setState({ songSheets: json.songSheets })
      }
    })
  }

  handleSheetClick(sheet) {
    this.props.setSongSheet(sheet)
    this.props.setHomeSubj('6')
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.tabs}>
          热门标签：
          {DEFAULT.labels.map((v, i) => (
            <span style={{ marginLeft: 10 }} key={'songSheets' + v}>
              {(i === 0) ? '' : '/'}
              <span style={{ marginLeft: 10 }}>
                <a href="#"
                   style={{ textDecoration: 'none', color: '#666' }}
                   onClick={(e) => e.preventDefault()}>{v}</a>
              </span>
            </span>
          ))}
        </div>
        <Divider />
        <CardPane
          Items={this.state.sheets}
          onClickItem={(s) => this.handleSheetClick(s || '默认歌单')}/>
      </div>
    )
  }
}

const styles = {
  container: {
    marginTop: 24,
  },
  tabs: {
    margin: 8,
    color: '#333',
  },
}

const mapDispatchToProps = (dispatch) => {
  return {
    setHomeSubj: (subj) => dispatch(setHomeSubj(subj)),
    setSongSheet: (sheet) => dispatch(setSongSheet(sheet)),
  }
}

export default connect(null, mapDispatchToProps)(Sheets)
