import React from 'react'

const HEADERS = [
  '',
  '操作',
  '音乐标题',
  '歌手',
  '专辑',
  '时长',
]

const WIDTHS = [4, 4, 20, 14, 14, 7]
const SONG = [
  'Time to say goodbye',
  'Lauren Aquilina',
  'I don\'t know',
  '03:08'
]

class Table extends React.Component {
  render() {
    console.log(WIDTHS.join('fr '));
    return (
      <div style={styles.container}>
        <div style={Object.assign({}, styles.rows(WIDTHS), styles.headers)}>
          {HEADERS.map((v, i) =>
            <div
              key={'table-' + v + i}
              className="flex-s-c"
              style={Object.assign(
                  (i !== 0 ? { borderLeft: '1px solid #ddd' } : {}),
                  styles.col,
              )}>
              {v}
            </div>
          )}
        </div>
        <div style={styles.body}>
          {Array(12).fill(false).map((v, i) =>
            <Item key={'table-row-' + v + i} id={i}/>
          )}

        </div>
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
    return (
      <div
      onMouseOver={() => this.setState({ hover: true })}
      onMouseOut={() => this.setState({ hover: false })}
      style={Object.assign(
        (this.props.id % 2 !== 0 ? { background: '#fafafa' } : {}),
        (this.state.hover ? { background: '#eee' } : {}),
        styles.rows(WIDTHS)
      )}>
        <div style={Object.assign({}, styles.col, styles.num)}>
          {(this.props.id + 1).toString().padStart(2, '0')}
        </div>
        <div className="flex-c-c" style={styles.col}>❤ ✔</div>
        {SONG.map((v, i) =>
          <div
            className="flex-s-c"
            key={'table-row-item' + this.props.id + v + i}
            style={Object.assign(styles.col)}>
            {v}
          </div>
        )}
      </div>
    )
  }
}

const styles = {
  container: {
    fontSize: 13,
    color: '#666',
  },
  headers: {
    borderBottom: '1px solid #ddd',
  },
  col: {
    padding: '0 8px',
    minWidth: 42,
  },
  rows: (a) => ({
    height: 28,
    display: 'grid',
    gridTemplateColumns: a.join('fr ') + 'fr',
  }),
  num: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
  }
}

export default Table
