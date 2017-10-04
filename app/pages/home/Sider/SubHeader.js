import React from 'react'

class SubHeader extends React.Component {
  render() {
    return (
      <div className="flex-c-c" style={styles.container}>
        <span>{this.props.value}</span>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

const styles = {
  container: {
    height: 36,
    padding: '0 8px',
    justifyContent: 'space-between',
    color: '#888',
    fontSize: 14,
  }
}

export default SubHeader
