import React from 'react'

class Subheader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }

  handleClick(event) {
    event.preventDefault()
    const onClick = this.props.onClick
    if (onClick !== void 0) {
      this.props.onClick()
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <span style={styles.span}>{this.props.title}</span>
        <a
          href="#"
          style={Object.assign({ color: (this.state.hover) ? '#333' : '#666' }, styles.a)}
          onClick={(event) => this.handleClick(event)}
          onMouseOver={() => this.setState({ hover: true })}
          onMouseOut={() => this.setState({ hover: false })}>
          更多>
        </a>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
  },
  span: {
    margin: 6,
    color: '#333',
    fontWeight: '400',
    fontSize: 18,
  },
  a: {
    textDecoration: 'none',
    margin: 6,
    fontSize: 13,
  }
}

export default Subheader
