import React from 'react'
import { connect } from 'react-redux'
import { setPresentSong, setHomeSubj } from '../../../actions'
import Ajax from '../../../common/Ajax'

import { Tabs, Tab } from 'material-ui/Tabs'
import { List, ListItem } from 'material-ui/List'
import ButtonGroup from '../../../components/ButtonGroup'

const DEFAULT = {
  labels: ['全部', '华语', '欧美', '韩国', '日本'],
  id: '001',
  name: 'Time to say goodbye',
  singer: 'Lambda',
  time: '03:23'
}

class NewestMusic extends React.Component {
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
          <ButtonGroup />
        </div>
        <Tabs
          style={styles.tabs}
          inkBarStyle={{ background: '#888' }}
          tabItemContainerStyle={{ background: '#fff0' }}
          value={this.state.tab}
          onChange={tab => this.setState({ tab })}>
          {DEFAULT.labels.map((v, i) =>
            <Tab
              onMouseOver={() => this.setState({ hoverTab: i })}
              onMouseOut={() => this.setState({ hoverTab: -1 })}
            label={<span style={Object.assign({ fontSize: 15 },
              (i === this.state.tab || i === this.state.hoverTab)
                              ? { color: '#555', fontWeight: '600' }
                              : { color: '#666' })}>
              {v}
            </span>}
              value={i}>
            </Tab>
          )}
        </Tabs>

        <List style={styles.list}>
          {this.state.songs.map((v, i) => {
             const song = (v.id) ? v : DEFAULT
             return (
               <ListItem
                 onClick={() => this.handleSongClick(song.id)}
                 style={(i % 2 === 0) ? null : { backgroundColor: '#f2f2f2' }}>
                 <div style={styles.item}>
                   <span style={styles.index}>
                     {i < 9 ? '0' + (i + 1) : '' + (i + 1)}
                   </span>
                   <div style={styles.name}>{song.name}</div>
                   <span style={styles.singer}>{song.singer}</span>
                   <span style={styles.index}>{song.time}</span>
                 </div>
               </ListItem>
             )
          })}
        </List>
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
  item: {
    display: 'flex',
  },
  index: {
    marginRight: 30,
    color: '#666',
  },
  name: {
    display: 'inline',
    color: '#333',
    width: 400,
    height: 22,
    fontSize: 18,
    fontWeight: '400',
    overflow: 'hidden',
  },
  singer: {
    color: '#999',
    width: 200,
    overflow: 'hidden',
  },
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPresentSong: (song) => dispatch(setPresentSong(song)),
    setHomeSubj: (subj) => dispatch(setHomeSubj(subj)),
  }
}

export default connect(null, mapDispatchToProps)(NewestMusic)
