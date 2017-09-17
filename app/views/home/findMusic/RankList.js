import React from 'react'

import Play from 'material-ui/svg-icons/av/play-circle-outline'

const assign = Object.assign
const DEFAULT = {
  items: Array(8).fill(false).map((v, i) => i),
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
        <div className="flex-c-c" style={styles.header}>
          <div style={styles.title}>
            <div style={styles.upper}>神</div>
            <div style={styles.lower}>么榜</div>
            <div style={styles.date}>09月17日更新</div>
          </div>
          <Play
            onMouseOver={() => this.setState({ hoverPlay: true })}
            onMouseOut={() => this.setState({ hoverPlay: false })}
            style={assign({ color: this.state.hoverPlay ? '#fff' : '#fffc' },
                styles.play)}/>
        </div>
        <div style={styles.list}>
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
              {i + 1}--0123456789
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
  },
  header: {
    height: 100,
    background: 'skyblue',
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
  list: {
  },
  item: {
    height: 34,
    justifyContent: 'start',
    padding: '0 8px 0 12px',
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
