import React from 'react'
import { SONG } from '../../../strings'

import PlayIcon from 'material-ui/svg-icons/av/play-circle-outline'

class RecommendList extends React.Component {
  render() {
    return (
      <div className="flex-wrap" style={styles.container}>
        {this.props.items.map((v, i) =>
          <Item
            key={'recommend-list-' + v.id + i}
            value={v}
            id={i}
            {...this.props}
          />
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

  handleSongClick(id) {
    this.props.setSong(id || SONG.ID)
  }

  render() {
    const i = this.props.id
    return (
      <div
        onDoubleClick={() => this.handleSongClick(this.props.value.id)}
        onMouseOver={() => this.setState({ hover: true })}
        onMouseOut={() => this.setState({ hover: false })}
        style={Object.assign(
            (i < 5 ? {} : { borderLeft: '1px solid #eee' }),
            ((i < 5 && i % 2 === 0) || (i >= 5 && i % 2 === 1) ? {} : { background: '#fafafa' }),
            (this.state.hover ? { background: '#eee' } : {}),
            styles.listItem
        )}
      >
        <span className="flex-c-c" style={styles.number}>
          {(i + 1).toString().padStart(2, '0')}
        </span>
        <div
          className="flex-c-c"
          style={styles.icon}
          onClick={() => this.handleSongClick(this.props.value.id)}
        >
          <img
            style={styles.img}
            src={this.props.value.img || SONG.IMG}
            alt=""
          />
          <PlayIcon style={styles.mask}/>
        </div>
        <div className="flex-c-c" style={styles.info}>
          <div className="text-ellipsis" style={styles.name}>
            {this.props.value.name || SONG.NAME}
          </div>
          <div
            className="text-ellipsis"
            style={Object.assign(
                { color: this.state.hover === i ? '#666' : '#999' },
                styles.singer)}
          >
            {this.props.value.singer || SONG.SINGER}
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    margin: '16px auto 36px',
    flexDirection: 'column',
    height: 320,
    border: '1px solid #eee',
  },
  listItem: {
    display: 'grid',
    gridTemplateColumns: '48px 64px 1fr',
    height: 64,
    cursor: 'default',
    width: '50%',
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
  info: {
    flexDirection: 'column',
    alignItems: 'start',
    padding: '0 12px 0 8px',
    overflow: 'hidden',
  },
  name: {
    color: '#666',
    fontWeight: '400',
    width: '100%',
  },
  singer: {
    fontWeight: '400',
    fontSize: 13,
    cursor: 'pointer',
    width: '100%',
  },
}

export default RecommendList
