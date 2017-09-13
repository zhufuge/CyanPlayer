import React from 'react'

class CircleIconButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hover: false }
  }

  render() {
    const props = this.props,
      backgroundColor = props.hover || styles.hover,
      container = Object.assign(this.state.hover ? { backgroundColor } : {},
        styles.container, props.style)
    return (
      <div
        className="flex-c-c"
        style={container}
        onMouseOver={() => this.setState({ hover: true })}
        onMouseOut={() => this.setState({ hover: false })}
        onClick={() => props.onClick.call(this) }>
        {props.children}
      </div>
    )
  }
}

const styles = {
  container: {
    width: 42,
    height: 42,
    backgroundColor: '#666',
    borderRadius: 42,
    cursor: 'pointer',
  },
  hover: '#333',
}

export default CircleIconButton
