import React from 'react'
import { connect } from 'react-redux'
import { setSong, setSubj, setSheet } from '../../../actions'
import Ajax from '../../../common/Ajax'

import Divider from 'material-ui/Divider'
import Subheader from './Subheader'
import CardPane from './CardPane'
import Card from './Card'
import List from './RecommendList'

class Recommend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sheets: Array(10).fill(false),
      songs: Array(10).fill(false),
      singers: Array(10).fill(false),
    }
  }

  componentWillMount() {
    Ajax('recommend').then(json => json && this.setState(Object.assign({}, json)))
  }

  handleSheetClick(sheet='默认歌单') {
    this.props.setSheet(sheet)
    this.props.setSubj('6')
  }

  render() {
    const state = this.state
    return (
      <div style={styles.container}>
        <Subheader title="推荐歌单" onClick={() => this.props.setTab(1)}/>
        <Divider />
        <CardPane>
          {state.sheets.map(v =>
            <Card
              primary={true}
              value={v.name}
              onClick={() => this.handleSheetClick(v.id)}
              src={v.src}/>
          )}
        </CardPane>
        <Subheader title="最新音乐" onClick={() => this.props.setTab(4)}/>
        <Divider />
        <List
          items={state.songs}
          setSong={(s) => this.props.setSong(s)}/>
        <Subheader title="推荐歌手" onClick={() => this.props.setTab(3)}/>
        <Divider />
        <CardPane>
          {state.singers.map(v =>
            <Card
              primary={true}
              value={v.name}
              onClick={() => this.handleSheetClick(v.id)}
              src={v.src}/>
          )}
        </CardPane>
      </div>
    )
  }
}

const styles = {
  container: {
    marginTop: 26,
  },
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSong: (song) => dispatch(setSong(song)),
    setSheet: (sheet) => dispatch(setSheet(sheet)),
    setSubj: (subj) => dispatch(setSubj(subj)),
  }
}

export default connect(null, mapDispatchToProps)(Recommend)
