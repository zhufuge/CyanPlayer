import React from 'react'

import Play from 'material-ui/svg-icons/av/play-circle-outline'

const assign = Object.assign
const DEFAULT = {
  items: Array(8).fill(false).map((v, i) => i),
  title: "什么榜",
  name: "Time to say goodbye",
  singer: "Lauren...",
}

class RankList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverItem: -1,
      hoverPlay: false,
      hoverMore: false,
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <div
          className="flex-c-c"
          style={assign({}, this.props.headerStyle, styles.header)}>
          <div style={styles.title}>
            <div style={styles.upper}>
              {(this.props.title || DEFAULT.title)[0]}
            </div>
            <div style={styles.lower}>
              {(this.props.title || DEFAULT.title).slice(1)}
            </div>
            <div style={styles.date}>09月17日更新</div>
          </div>
          <Play
            onMouseOver={() => this.setState({ hoverPlay: true })}
            onMouseOut={() => this.setState({ hoverPlay: false })}
            style={assign({ color: this.state.hoverPlay ? '#fff' : '#fffa' },
                styles.play)}/>
        </div>
        <div>
          {(this.props.items || DEFAULT.items).map((v, i) =>
            <div
              onMouseOver={() => this.setState({ hoverItem: i })}
              onMouseOut={() => this.setState({ hoverItem: -1 })}
              className="flex-c-c"
              style={assign(
                { background: this.state.hoverItem === i ? '#eee' :
                              (i % 2 === 0 ? '#fafafa' : '#fff') },
                styles.item
              )}>
            <span style={{ fontSize: 17, color: i < 3 ? '#d74d4d' : '#777', }}>
              {i + 1}
            </span>
            <span className="flex-c-c" style={{ width: 28, fontSize: 16 }}>
              -
            </span>
            <span style={styles.name}>{(v.name || DEFAULT.name)}</span>
            <span style={styles.info}>{(v.info || DEFAULT.singer)}</span>
            </div>
          )}
        </div>
        <div className="flex-c-c" style={styles.footer}>
          <span
            onMouseOver={() => this.setState({ hoverMore: true })}
            onMouseOut={() => this.setState({ hoverMore: false })}
            style={assign(
                { color: this.state.hoverMore ? '#666' : '#888' },
                styles.more
            )}>
            查看全部>
          </span>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    border: '1px solid #eee',
    fontSize: 13,
    color: '#888',
  },
  header: {
    height: 100,
    justifyContent: 'space-between',
    padding: '0 20px',
    cursor: 'pointer',
  },
  title: {
    width: 140,
    display: 'grid',
    gridTemplateColumns: '2fr 3fr',
    gridTemplateRows: '2fr 1fr',
    color: '#fff'
  },
  upper: {
    fontSize: 48,
    fontStyle: 'italic',
    fontWeight: '900',
    gridRow: '1/3',
  },
  lower: {
    marginTop: 5,
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: '900',
    justifyContent: 'start',
  },
  date: {
    fontSize: 12,
    fontWeight: '300',
    color: '#eee',
  },
  play: {
    width: 54,
    height: 54,
  },
  item: {
    height: 34,
    justifyContent: 'start',
    padding: '0 8px 0 12px',
    position: 'relative',
  },
  name: {
    fontSize: 14,
    color: '#555',
  },
  info: {
    position: 'absolute',
    right: 10,
  },
  footer: {
    justifyContent: 'end',
    height: 48,
    background: '#fafafa',
  },
  more: {
    margin: 12,
    cursor: 'pointer',
  },
}

export default RankList
