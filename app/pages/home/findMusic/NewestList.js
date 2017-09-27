import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Play from 'material-ui/svg-icons/av/play-circle-outline'
import Collection from 'material-ui/svg-icons/file/create-new-folder'
import { cyan500 } from 'material-ui/styles/colors'

const DEFAULT = {
  id: '001',
  name: "Time to say goodbye",
  singer: "Lauren Aquilina",
  album: 'AlbumX',
  src: "./img/0.png",
  time: '03:24',
}

const assign = Object.assign

class NewestList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: -1,
    }
  }

  render() {
    const props = this.props
    return (
      <div className="list">
        <div className="flex-c-c" style={styles.header}>
          <FlatButton
            label="播放全部"
            labelStyle={{ color: '#666' }}
            icon={<Play color={cyan500}/>}
            style={{ height: 32, lineHeight: '32px' }}/>
          <RaisedButton
            label="收藏全部"
            labelStyle={{ color: '#666', }}
            icon={<Collection color={'#999'} style={{ width: 20, marginBottom: 3 }}/>}
            style={{ height: 32 }}/>
        </div>
        {props.items.map((v, i) =>
          <div
            key={'neweset-list-' + v.name + i}
            onClick={() => props.onClickItem(v.id)}
            onMouseOver={() => this.setState({ hover: i })}
            onMouseOut={() => this.setState({ hover: -1 })}
            style={assign(
                this.state.hover === i
                ? { background: '#eee' }
                : (i % 2 === 1 ? {} : { background: '#fafafa' }),
                styles.listItem)}>
            <div className="flex-c-c" style={styles.number}>
              {(i + props.start).toString().padStart(2, '0')}
            </div>
            <div className="flex-c-c">
              <img style={styles.img} src={DEFAULT.src} alt="" />
              <Play style={styles.mask}/>
            </div>
            <div className="flex-c-c" style={styles.name}>
              {v.name || DEFAULT.name}
            </div>
            <div className="flex-c-c" style={assign(
                { color: this.state.hover === i ? '#666' : '#999' },
                styles.singer)}>
              {v.singer || DEFAULT.singer}
            </div>
            <div className="flex-c-c" style={assign(
                { color: this.state.hover === i ? '#666' : '#999' },
                styles.singer)}>
              {v.album || DEFAULT.album}
            </div>
            <div className="flex-c-c" style={styles.time}>
              {v.time || DEFAULT.time}
            </div>
          </div>)}
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
    gridTemplateColumns: '48px 64px 7fr 4fr 5fr 2fr',
    height: 64,
    fontSize: 16,
    color: '#666',
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
    marginLeft: 8,
    justifyContent: 'start',
    color: '#555',
  },
  singer: {
    justifyContent: 'start',
    fontSize: 14,
    cursor: 'pointer',
  },
  time: {
    justifyContent: 'start',
    fontWeight: '300',
    fontSize: 13,
  },
}

export default NewestList
