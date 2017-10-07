import React from 'react'

class ButtonGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: -1,
      select: props.select,
    }
  }

  handleItemClick(value) {
    this.props.select && this.setState({ select: value })
    this.props.onItemClick && this.props.onItemClick(value)
  }

  render() {
    return (
      <div style={Object.assign({}, this.props.style, styles.container)}>
        {(
           Array.isArray(this.props.children)
           ? this.props.children
           : [this.props. children]
        ).map((node, i) =>
          <div
            key={node.props.value}
            onMouseOver={() => this.setState({ hover: i })}
            onMouseOut={() => this.setState({ hover: -1 })}
            onClick={() => this.handleItemClick(node.props.value)}
            className="flex-c-c"
            style={Object.assign(
                (i !== 0 ? { borderLeft: '1px solid #ddd' } : {}),
                styles.item,
                (
                  this.state.select === node.props.value
                  ? { background: '#888', color: '#fff' }
                  : (
                    i === this.state.hover
                    ? { background: '#eee', color: '#444' }
                    : {}
                  )
                )
            )}>
            {node}
          </div>
        )}
      </div>
    )
  }
}

const styles = {
  container: {
    height: 32,
    borderRadius: 5,
    border: '1px solid #ddd',
    display: 'flex',
    overflow: 'hidden',
  },
  item: {
    color: '#666',
    fontSize: 14,
  }
}

export default ButtonGroup
