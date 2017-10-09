import React from 'react'
import { connect } from 'react-redux'
import { setHomeSubj, setSongSheet } from '../../../actions'
import Ajax from '../../../common/Ajax'
import { SINGER } from '../../../strings'

import LineSelector from './LineSelector'
import CardPane from './CardPane'
import Card from './Card'

class SingerList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      singers: Array(20).fill(false).map((v, i) => i),
    }
  }

  componentWillMount() {
    Ajax('singers').then(json => json && this.setState({ singers: json.singers }))
  }

  handleSingerClick(singer) {
    this.props.setSongSheet(singer)
    this.props.setHomeSubj('6')
  }

  render() {
    return (
      <div style={styles.container}>
        {SINGER.ATTRIBUTES.map((v, i) =>
          <LineSelector
            key={'singers-selector-' + v.title + i}
            title={v.title + '：'}
            activeStyle={{ borderRadius: 2, background: '#999', color: '#fff' }}
            items={v.items}/>
        )}
        <div style={styles.divider}></div>
        <CardPane itemWidth={150}>
          {this.state.singers.map((v, i) =>
            <Card
              key={'singers-card-' + v.id + i}
              value={v.name || SINGER.NAME}
              onClick={() => this.handleSingerClick(v.id)}
              playIcon={false}
              src={v.src || SINGER.IMG}
              style={{ width: 150, height: 200 }}
              imgStyle={{ width: 148, height: 148 }}
              textStyle={{ fontSize: 14 }}
            />
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
  divider: {
    margin: '24px 0',
    width: '100%',
    height: 2,
    background: '#eee',
  },
}

const mapDispatchToProps = (dispatch) => {
  return {
    setHomeSubj: (subj) => dispatch(setHomeSubj(subj)),
    setSongSheet: (sheet) => dispatch(setSongSheet(sheet)),
  }
}

export default connect(null, mapDispatchToProps)(SingerList)
