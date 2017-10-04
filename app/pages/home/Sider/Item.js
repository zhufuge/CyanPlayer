import React from 'react'

import { cyan500 } from 'material-ui/styles/colors'

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }

  render() {
    const Icon = this.props.icon
    return (
      <div
        className="flex-s-c"
        onMouseOver={() => this.setState({ hover: true })}
        onMouseOut={() => this.setState({ hover: false })}
        onClick={() => this.props.onClick()}
        style={Object.assign(
            this.props.selected ? { background: '#eee' } : {},
            styles.container
        )}
      >
        {this.props.selected ? <div style={styles.line}></div> : null}
        <div className="flex-c-c" style={styles.iconContainer}>
          <Icon
            style={Object.assign({ color:
              (this.state.hover || this.props.selected) ? '#222' :  '#666'
            }, styles.icon)}
          />
        </div>
        <div
          style={Object.assign({ color:
              (this.state.hover || this.props.selected) ? '#222' :  '#666'
          }, styles.value)}
        >
          {this.props.value}
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    height: 42,
    padding: '0 8px',
    position: 'relative',
  },
  line: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: 4,
    background: cyan500,
  },
  iconContainer: {
    margin: 8,
  },
  icon: {
    height: 18,
  },
  value: {
    fontSize: 14,
  },
}

export default Item
