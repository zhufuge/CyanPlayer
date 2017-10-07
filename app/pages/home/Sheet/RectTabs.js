import React from 'react'

import { cyan500 } from 'material-ui/styles/colors'

class RectTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  handleItemClick(value) {
    this.props.onItemClick && this.props.onItemClick(value)
    this.setState({ value })
  }

  render() {
    return (
      <div style={styles.container}>
        <div className="flex-s-c" style={styles.tabs}>
          {(
             Array.isArray(this.props.children)
             ? this.props.children
             : [this.props.children]
          ).map((node, i) =>
            <Item
              key={"rect-tabs-" + i}
              id={i}
              node={node}
              selected={this.state.value === node.props.value}
              onClick={() => this.handleItemClick(node.props.value)}
            />
          )}
        </div>
        <div style={styles.divider}></div>
      </div>
    )
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }

  render() {
    return (
      <div
        onClick={() => this.props.onClick()}
        onMouseOver={() => this.setState({ hover: true })}
        onMouseOut={() => this.setState({ hover: false })}
        className="flex-c-c"
        style={Object.assign(
            (this.props.id !== 0 ? { marginLeft: 6 } : {}),
            styles.item,
            (this.state.hover ? { background: '#eee' } : {}),
            (this.props.selected ? styles.selected : {}),
        )}>
        {this.props.node}
      </div>
    )
  }
}

const styles = {
  container: {

  },
  tabs: {

  },
  item: {
    border: '1px solid #ddd',
    borderBottom: 'none',
    height: 32,
    minWidth: 90,
    fontSize: 14,
    color: '#666',
  },
  selected: {
    border: `1px solid ${cyan500}`,
    borderBottom: 'none',
    color: '#fff',
    background: cyan500,
  },
  divider: {
    height: 2,
    width: '100%',
    background: cyan500,
  }
}

export default RectTabs
