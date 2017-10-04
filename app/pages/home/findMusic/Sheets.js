import React from 'react'
import { connect } from 'react-redux'
import { setSubj, setSheet } from '../../../actions'
import Ajax from '../../../common/Ajax'
import { SHEETS, SUBJECTS } from '../../../strings'

import RaisedButton from 'material-ui/RaisedButton'
import Icon_DropDown from 'material-ui/svg-icons/Navigation/arrow-drop-down'
import { cyan500 } from 'material-ui/styles/colors'

import CardPane from './CardPane'
import Card from './Card'
import LineSelector from './LineSelector'

class Sheets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sheets: Array(20).fill(false).map((v, i) => i),
      hoverLabel: -1,
    }
  }

  componentWillMount() {
    Ajax('sheets').then(json => json && this.setState(Object.assign({}, json)))
  }

  handleSheetClick(sheet) {
    this.props.setSubj(SUBJECTS.SHEET)
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
      title={SHEETS.H_HOT_LABEL}
      items={SHEETS.LABELS}/>
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
    setSubj: (subj) => dispatch(setSubj(subj)),
    setSheet: (sheet) => dispatch(setSheet(sheet)),
  }
}

export default connect(null, mapDispatchToProps)(Sheets)
