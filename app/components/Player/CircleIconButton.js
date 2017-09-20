import React from 'react'

import { cyan500, cyan700 } from 'material-ui/styles/colors'

class CircleIconButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
  }

  render() {
    const props = this.props
    return (
      <div
        title={props.title}
        className="flex-c-c"
        style={Object.assign(
            { background: this.state.hover ? cyan700 : cyan500 },
            styles.container,
            props.style)}
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
    borderRadius: 42,
    cursor: 'pointer',
  },
}

export default CircleIconButton
