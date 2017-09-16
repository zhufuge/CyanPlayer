import React from 'react'

import Play from 'material-ui/svg-icons/av/play-circle-outline'

const DEFAULT = {
  id: '001',
  name: "Time to say goodbye",
  singer: "Lauren Aquilina",
  src: "./img/0.png",
}

class RecommendList extends React.Component {
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
        {props.Items.map((v, i) =>
          <div
            key={'recommend-songs-' + i + v.name}
            onClick={() => props.onClickItem(v.id)}
            onMouseOver={() => this.setState({ hover: i })}
            onMouseOut={() => this.setState({ hover: -1 })}
            style={Object.assign(this.state.hover === i
                               ? { background: '#eee' }
                               : (i % 2 === 0 ? {} : { background: '#fafafa' }),
                styles.listItem)}>
            <div className="flex-c-c" style={styles.number}>
              {(i + props.start).toString().padStart(2, '0')}
            </div>
            <div className="flex-c-c">
              <img style={styles.img} src={DEFAULT.src} alt="" />
              {/* <Play style={styles.mask}/> */}
            </div>
            <div className="flex-c-c" style={styles.info}>
              <div style={styles.name}>{v.name || DEFAULT.name}</div>
              <div style={styles.singer}>{v.singer || DEFAULT.singer}</div>
            </div>
          </div>)}
      </div>
    )
  }
}

const styles = {
  listItem: {
    display: 'grid',
    gridTemplateColumns: '48px 64px 1fr',
    height: 64,
  },
  number: {
    color: '#999',
    fontWeight: '300',
  },
  img: {
    width: 48,
    height: 48,
    border: '1px solid #eee',
  },
  mask: {
    zIndex: 100,
    width: 48,
    height: 48,
  },
  info: {
    flexDirection: 'column',
    alignItems: 'start',
    marginLeft: 8,
  },
  name: {
    color: '#666',
    fontWeight: '400',
  },
  singer: {
    color: '#999',
    fontWeight: '400',
    fontSize: 13,
  },
}

export default RecommendList
