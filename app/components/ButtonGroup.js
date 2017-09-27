import React from 'react'

class ButtonGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: -1,
      select: 0,
    }
  }

  render() {
    return (
      <div style={styles.container}>
        {['新歌速递', '新碟上架'].map((v, i) =>
          <div
            key={v}
            onMouseOver={() => this.setState({ hover: i })}
            onMouseOut={() => this.setState({ hover: -1 })}
            onClick={() => this.setState({ select: i })}
            className="flex-c-c"
            style={Object.assign(
                (i !== 0 ? { borderLeft: '1px solid #ddd' } : {}),
                styles.item,
                (i === this.state.select ? { background: '#888', color: '#fff' } :
                 (i === this.state.hover ? { background: '#eee', color: '#444' } : {}))
            )}>
            {v}
          </div>
        )}
      </div>
    )
  }
}

const styles = {
  container: {
    margin: 8,
    height: 32,
    width: 320,
    borderRadius: 5,
    border: '1px solid #ddd',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    overflow: 'hidden',
  },
  item: {
    color: '#666',
    fontSize: 14,
  }
}

export default ButtonGroup
