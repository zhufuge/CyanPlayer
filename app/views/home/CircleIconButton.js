import React from 'react'

const isArray = Array.isArray

class CircleIconButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hover: false }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    const props = this.props,
          backgroundColor = props.hover || styles.hover,
          container = Object.assign({}, styles.container, props.style,
                                    (this.state.hover) ? { backgroundColor } : {})
    return (
        <div
          style={container}
          onMouseOver={() => this.setState({ hover: true })}
          onMouseOut={() => this.setState({ hover: false })}
          onClick={this.onClick}>
          {props.children}
        </div>
    )
  }
}

const styles = {
  container: {
    width: 42,
    height: 42,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#666',
    borderRadius: 42,
    cursor: 'pointer',
  },
  hover: '#333',
}

export default CircleIconButton
