import React from 'react'
import { connect } from 'react-redux'
import { setHomeSubj, setSongSheet } from '../../../actions'
import Ajax from '../../../common/Ajax'

import Card from './Card'

class SingerList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      singers: []
    }
  }

  componentWillMount() {
    Ajax('singers').then(json => json && this.setState({ singers: json.singers }))
  }

  Cards() {
    const container = this.state.singers
    if (container.length === 0) {
      for (let i = 0; i < 20; i++) {
        container.push(i)
      }
    }

    return container.map((v, i) => {
      return (
        <Card
          key={v.id || 'singer-list-' + i}
          value={v.name}
          onClick={() => this.handleSingerClick(v.id || '默认歌单')}
          src={v.src}/>
      )
    })
  }

  handleSingerClick(singer) {
    this.props.setSongSheet(singer)
    this.props.setHomeSubj('6')
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.cards}>
          {this.Cards()}
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    marginTop: 24,
  },
  tabs: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 15,
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 12,
  },
}

const mapDispatchToProps = (dispatch) => {
  return {
    setHomeSubj: (subj) => dispatch(setHomeSubj(subj)),
    setSongSheet: (sheet) => dispatch(setSongSheet(sheet)),
  }
}

export default connect(null, mapDispatchToProps)(SingerList)
