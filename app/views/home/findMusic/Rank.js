import React from 'react'
import { connect } from 'react-redux'
import { setPresentSong, setHomeSubj, setSongSheet } from '../../../actions'
import Ajax from '../../../common/Ajax'

import Divider from 'material-ui/Divider'
import {
  blue500,
  cyan400,
  pink400,
  red700,
  deepPurple700,
} from 'material-ui/styles/colors'
import List from './RankList'
import CardPane from './CardPane'
import Card from './Card'

const DEFAULT = {
  list: [
    { title: '飙升榜', color: blue500 },
    { title: '新歌榜', color: cyan400 },
    { title: '原创榜', color: pink400 },
    { title: '热歌榜', color: red700 },
    { title: '歌手榜', color: deepPurple700 },
  ]
}

class RankingLists extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      top: [],
      newest: [],
      original: [],
      hot: [],
      singer: [],
      sheets: Array(10).fill(0).map((v, i) => i),
    }
  }

  componentWillMount() {
    Ajax('rank').then(json => json && this.setState(Object.assign({}, json)))
  }

  componentDidMount() {
    this.updateDimensions.call(this)
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  updateDimensions() {
    this.setState({ offsetWidth: this.wrapper.offsetWidth })
  }

  handleSongClick(song) {
    this.props.setPresentSong(song)
    this.props.setHomeSubj('2')
  }

  handleSingerClick(singer) {
    this.props.setSongSheet(singer)
    this.props.setHomeSubj('6')
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.title}>官方榜</div>
        <Divider />
        <div
          ref={ref => this.wrapper = ref}
          style={styles.wrapper(Math.trunc(this.state.offsetWidth / 260))}>
          {DEFAULT.list.map((v, i) =>
            <List
              title={v.title}
              headerStyle={{ background: v.color }} />
          )}
        </div>
        <div style={styles.title}>全球榜</div>
        <Divider />
        <CardPane>
          {this.state.sheets.map(v =>
            <Card
              value={v.name}
              onClick={() => v.id}
              src={v.src}/>
          )}
        </CardPane>
      </div>
    )
  }
}

const styles = {
  container: {
    marginTop: 16,
  },
  title: {
    color: '#555',
    fontSize: 18,
    margin: '0 0 8px',
  },
  wrapper: (n) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${n}, 1fr)`,
    gridGap: '24px 12px',
    margin: '12px auto 36px',
  }),
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPresentSong: (song) => dispatch(setPresentSong(song)),
    setHomeSubj: (subj) => dispatch(setHomeSubj(subj)),
    setSongSheet: (sheet) => dispatch(setSongSheet(sheet)),
  }
}

export default connect(null, mapDispatchToProps)(RankingLists)
