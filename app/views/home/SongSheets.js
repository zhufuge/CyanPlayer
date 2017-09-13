import React from 'react'
import { connect } from 'react-redux'
import { setPage, setSongSheet } from '../../actions'
import Ajax from '../../common/Ajax'

import Card from './Card'
import Divider from 'material-ui/Divider'

const Span = (props) => (
  <span style={{ marginLeft: 10 }}>{props.children}</span>
)

class SongSheets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songSheets: [],
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
    this.props.setPage('6')
  }

  render() {
    const container = this.state.songSheets
    if (container.length === 0) {
      for (let i = 0; i < 20; i++) {
        container.push(i)
      }
    }

    return (
      <div style={styles.container}>
        <div style={styles.tabs}>
          热门标签：
          {[ '华语', '流行', '电子', '轻音乐', 'ACG', '其他'].map((v, i) => (
            <Span key={'songSheets' + v}>
              {(i === 0) ? '' : '/'}
              <Span>
                <a href="#"
                   style={{ textDecoration: 'none', color: '#666' }}
                   onClick={(e) => e.preventDefault()}>{v}</a>
              </Span>
            </Span>
          ))}
        </div>
        <Divider />
        <div className="flex-wrap" style={styles.cards}>
          {container.map((v, i) => (
            <Card
              key={v.id || 'songSheets-' + i}
              value={v.name}
              onClick={() => this.handleSheetClick(v.id || '默认歌单')}
              src={v.src}/>
          ))}
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    marginTop: 24,
  },
  cards: {
    marginTop: 5,
    marginBottom: 12,
  },
  tabs: {
    margin: 8,
    color: '#333',
  },
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (page) => dispatch(setPage(page)),
    setSongSheet: (sheet) => dispatch(setSongSheet(sheet)),
  }
}

export default connect(null, mapDispatchToProps)(SongSheets)
