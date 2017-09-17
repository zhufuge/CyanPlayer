import React from 'react'
import { connect } from 'react-redux'
import { setHomeSubj, setSongSheet } from '../../../actions'
import Ajax from '../../../common/Ajax'

import RaisedButton from 'material-ui/RaisedButton'
import Icon_DropDown from 'material-ui/svg-icons/Navigation/arrow-drop-down'
import { cyan500 } from 'material-ui/styles/colors'

import CardPane from './CardPane'

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
          <span  style={{ color: '#444' }}>热门标签：</span>
          {DEFAULT.labels.map((v, i) => [
             <span style={{ color: '#777', fontSize: 12 }}>
               {i === 0 ? "" : "|"}
             </span>,
             <span
               style={styles.label(this.state.hoverLabel === i)}
               onMouseOver={() => this.setState({ hoverLabel: i })}
               onMouseOut={() => this.setState({ hoverLabel: -1 })}>
               {v}
             </span>
          ])}
        </div>
        <CardPane
          items={this.state.sheets}
          onClickItem={(s) => this.handleSheetClick(s || '默认歌单')}/>
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
  label: (hover) => ({
    margin: '0 15px',
    color: (hover ? '#444' : '#777'),
    cursor: 'pointer'
  }),
}

const mapDispatchToProps = (dispatch) => {
  return {
    setHomeSubj: (subj) => dispatch(setHomeSubj(subj)),
    setSongSheet: (sheet) => dispatch(setSongSheet(sheet)),
  }
}

export default connect(null, mapDispatchToProps)(Sheets)
