import React from 'react'
import { SONG, LATEST } from '../../../strings'

import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Play from 'material-ui/svg-icons/av/play-circle-outline'
import Collection from 'material-ui/svg-icons/file/create-new-folder'
import { cyan500 } from 'material-ui/styles/colors'

const assign = Object.assign

class LatestList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const props = this.props
    return (
      <div className="list">
        <div className="flex-c-c" style={styles.header}>
          <FlatButton
            label={LATEST.LIST_BUTTON[0]}
            labelStyle={{ color: '#666' }}
            icon={<Play color={cyan500}/>}
            style={{ height: 32, lineHeight: '32px' }}/>
          <RaisedButton
            label={LATEST.LIST_BUTTON[1]}
            labelStyle={{ color: '#666', }}
            icon={<Collection color={'#999'} style={{ width: 20, marginBottom: 3 }}/>}
            style={{ height: 32 }}/>
        </div>
        {props.items.map((v, i) =>
          <Item
            key={'neweset-list-' + v.name + i}
            id={i}
            value={v}
            onClick={() => props.onClickItem(v.id)}/>
        )}
      </div>
    )
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
  }
  render() {
    const props = this.props,
      i = props.id,
      v = props.value,
      hover = this.state.hover
    return (
      <div
        onClick={() => props.onClick()}
        onMouseOver={() => this.setState({ hover: true })}
        onMouseOut={() => this.setState({ hover: false })}
        style={assign(
            hover ? { background: '#eee' } : (
              i % 2 === 1 ? {} : { background: '#fafafa' }
            ),
            styles.listItem)}>
        <div className="flex-c-c" style={styles.number}>
          {(i + 1).toString().padStart(2, '0')}
        </div>
        <div className="flex-c-c">
          <img style={styles.img} src={SONG.IMG} alt="" />
          <Play style={styles.mask}/>
        </div>
        <div className="flex-c-c" style={styles.name}>
          <span className="text-ellipsis">{v.name || SONG.NAME}</span>
        </div>
        <div className="flex-c-c" style={assign(
            { color: hover ? '#666' : '#999' },
            styles.singer)}>
          <span className="text-ellipsis">{v.singer || SONG.SINGER}</span>
        </div>
        <div className="flex-c-c" style={assign(
            { color: hover ? '#666' : '#999' },
            styles.album)}>
          <span className="text-ellipsis">{v.album || SONG.ALBUM}</span>
        </div>
        <div className="flex-c-c" style={styles.time}>
          {v.time || SONG.TIME}
        </div>
      </div>
    )
  }
}

const styles = {
  header: {
    justifyContent: 'space-between',
    height: 48,
    padding: '0 12px',
  },
  listItem: {
    display: 'grid',
    gridTemplateColumns: '48px 64px 8fr 4fr 5fr 2fr',
    height: 64,
    fontSize: 16,
    color: '#666',
    overflow: 'hidden',
  },
  number: {
    color: '#999',
    fontWeight: '300',
  },
  img: {
    width: 48,
    height: 48,
    border: '1px solid #eee',
    cursor: 'pointer',
  },
  mask: {
    width: 28,
    height: 28,
    position: 'absolute',
    cursor: 'pointer',
    color: '#fffc',
  },
  name: {
    padding: '0 8px',
    justifyContent: 'start',
    color: '#555',
    overflow: 'hidden',
  },
  singer: {
    padding: '0 8px',
    justifyContent: 'start',
    fontSize: 14,
    cursor: 'pointer',
    overflow: 'hidden',
  },
  album: {
    padding: '0 8px',
    justifyContent: 'start',
    fontSize: 14,
    cursor: 'pointer',
    overflow: 'hidden',
  },
  time: {
    padding: '0 8px',
    justifyContent: 'start',
    fontWeight: '300',
    fontSize: 13,
  },
}

export default LatestList
