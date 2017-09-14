import React from 'react'

class Subheader extends React.Component {
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
          style={styles.a}
          onClick={(event) => this.handleClick(event)}>
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
  },
  a: {
    textDecoration: 'none',
    margin: 6,
    color: '#666',
    fontSize: 14,
  }
}

export default Subheader
