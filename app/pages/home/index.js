import React from 'react'
import { connect } from 'react-redux'

import Sider from './Sider'
import FindMusic from './FindMusic'
import SongCard from './SongCard'
import DownloadList from './DownloadList'
import Upload from './Upload'
import SongSheet from './SongSheet'

const DEFAULT = {
  subj: [
    FindMusic,
    SongCard,
    SongCard,
    Upload,
    DownloadList,
    SongSheet,
  ],
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      innerHeight: window.innerHeight,
      scrollTop: false,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.container &&
        nextState.scrollTop !== this.state.scrollTop) {
      this.container.scrollTop = 0
    }
  }

  updateDimensions() {
    this.setState({ innerHeight: window.innerHeight })
  }

  render() {
    const Component = DEFAULT.subj[this.props.subj]
    const height = this.state.innerHeight - 108
    return (
      <div
        ref={ref => this.container = ref}
        style={Object.assign({ height },
            styles.container) }>
        <Sider style={{ height }}/>
        <div style={styles.main}>
          <Component scrollTop={() => this.setState({
              scrollTop: !this.state.scrollTop
          })}/>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    margin: '54px 0',
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
  main: {
    margin: '0 auto',
    padding: '0 20px 0 250px',
    maxWidth: 980,
  }
}

const mapStateToProps = (state) => {
  return {
    subj: state.subj,
  }
}

export default connect(mapStateToProps)(Home)
