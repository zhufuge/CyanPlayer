import React from 'react'
import { connect } from 'react-redux'

import MainPane from './MainPane'

class Song extends React.Component {
  render() {
    const height = this.props.windowInnerHeight - 108
    return (
      <div style={Object.assign({ height }, styles.container)}>
        <MainPane />
      </div>
    )
  }
}

const styles = {
  container: {
    margin: '54px auto',
    overflowX: 'hidden',
    overflowY: 'scroll',
    background: '#fafafa',
  },
}

const mapStateToProps = (state) => {
  return {
    windowInnerHeight: state.windowInnerHeight
  }
}

export default connect(mapStateToProps)(Song)
