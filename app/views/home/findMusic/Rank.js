import React from 'react'
import { connect } from 'react-redux'
import { setPresentSong, setHomeSubj, setSongSheet } from '../../../actions'
import Ajax from '../../../common/Ajax'

import Divider from 'material-ui/Divider'
import List from './RankList'
import CardPane from './CardPane'

const DEFAULT = {
  song: {
    name: "Time to say goodbye",
    singer: "Lauren Aquilina",
  },
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
        <div style={styles.wrapper}>
          <List />
          <List />
          <List />
          <List />
          <List />
        </div>
        <div style={styles.title}>全球榜</div>
        <Divider />
        <CardPane
          items={this.state.sheets}
          onClickItem={(s) => s} />
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
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '24px 12px',
    margin: '12px auto 36px',
  },
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPresentSong: (song) => dispatch(setPresentSong(song)),
    setHomeSubj: (subj) => dispatch(setHomeSubj(subj)),
    setSongSheet: (sheet) => dispatch(setSongSheet(sheet)),
  }
}

export default connect(null, mapDispatchToProps)(RankingLists)
