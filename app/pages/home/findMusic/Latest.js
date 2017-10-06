import React from 'react'
import { connect } from 'react-redux'
import { setPresentSong, setHomeSubj } from '../../../actions'
import Ajax from '../../../common/Ajax'
import { LATEST } from '../../../strings'

import { Tabs, Tab } from 'material-ui/Tabs'
import ButtonGroup from '../../../components/ButtonGroup'
import List from './LatestList'


class Latest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 0,
      hoverTab: -1,
      songs: Array(20).fill(false),
    }
  }

  componentWillMount() {
    Ajax('newest').then(json => json && this.setState({ songs: json.songs }))
  }

  handleSongClick(song) {
    this.props.setPresentSong(song)
    this.props.setHomeSubj('2')
  }

  render() {
    return (
      <div style={styles.container}>
        <div className="flex-c-c">
          <ButtonGroup
            style={{ margin: 8 }}
            select={LATEST.CONTENT[0]}
          >
            {LATEST.CONTENT.map((v) =>
              <span key={v} value={v} style={{ margin: '0 60px' }}>{v}</span>
            )}
          </ButtonGroup>
        </div>
        <Tabs
          style={styles.tabs}
          inkBarStyle={{ background: '#888' }}
          tabItemContainerStyle={{ background: '#fff0' }}
          value={this.state.tab}
          onChange={tab => this.setState({ tab })}>
          {LATEST.LABELS.map((v, i) =>
            <Tab
              key={'newest-tab-' + v + i}
              onMouseOver={() => this.setState({ hoverTab: i })}
              onMouseOut={() => this.setState({ hoverTab: -1 })}
              label={
                <span style={Object.assign({ fontSize: 15 }, (
                    i === this.state.tab ||
                    i === this.state.hoverTab
                ) ? { color: '#555', fontWeight: '600' } : { color: '#666' })}>
                  {v}
                </span>}
              value={i}>
            </Tab>
          )}
        </Tabs>
        <List
          items={this.state.songs}
          onClickItem={(s) => this.handleSongClick(s)}/>
      </div>
    )
  }
}

const styles = {
  container: {
    marginTop: 20,
  },
  tabs: {
    paddingRight: 500,
    borderBottom: '1px solid #ccc',
    margin: '5px 0 12px',
  },
  list: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'solid',
  },
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPresentSong: (song) => dispatch(setPresentSong(song)),
    setHomeSubj: (subj) => dispatch(setHomeSubj(subj)),
  }
}

export default connect(null, mapDispatchToProps)(Latest)
