import React from 'react'
import { connect } from 'react-redux'
import { setHomeSubj, setSongSheet } from '../../../actions'
import Ajax from '../../../common/Ajax'

import RaisedButton from 'material-ui/RaisedButton'
import Icon_DropDown from 'material-ui/svg-icons/Navigation/arrow-drop-down'
import { cyan500 } from 'material-ui/styles/colors'

import CardPane from './CardPane'
import Card from './Card'
import LineSelector from './LineSelector'

const DEFAULT = {
  labels: [ '华语', '流行', '电子', '轻音乐', 'ACG', '怀旧'],
  sheets: Array(20).fill(false).map((v, i) => i),
}

class Sheets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sheets: DEFAULT.sheets,
      hoverLabel: -1,
    }
  }

  componentWillMount() {
    Ajax('sheets').then(json => json && this.setState(Object.assign({}, json)))
  }

  handleSheetClick(sheet) {
    this.props.setSongSheet(sheet)
    this.props.setHomeSubj('6')
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.labels}>
          <RaisedButton
            label={'全部歌单'}
            labelStyle={{ paddingRight: 0 }}
            labelPosition="before"
            icon={<Icon_DropDown/>}
            style={styles.button}
      />
      <LineSelector
      title="热门标签："
      items={DEFAULT.labels}/>
      </div>
      <CardPane>
      {this.state.sheets.map((v, i) =>
        <Card
          key={'sheets-card-' + v.id + i}
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
    marginTop: 24,
  },
  button: {
    height: 32,
    marginRight: 12,
  },
  labels: {
    display: 'flex',
    alignItems: 'center',
  },
}

const mapDispatchToProps = (dispatch) => {
  return {
    setHomeSubj: (subj) => dispatch(setHomeSubj(subj)),
    setSongSheet: (sheet) => dispatch(setSongSheet(sheet)),
  }
}

export default connect(null, mapDispatchToProps)(Sheets)
