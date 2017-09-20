import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import Player from '../../components/Player'

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
    return (
      <div>
        <Header />
        <Sider />
        <div
          ref={ref => this.container = ref}
          style={Object.assign({ height: this.state.innerHeight - 148, },
              styles.container) }>
          <div style={{ margin: '0 auto', maxWidth: 980 }}>
            <Component scrollTop={() => this.setState({
                scrollTop: !this.state.scrollTop
            })}/>
          </div>
        </div>
        <Player />
      </div>
    )
  }
}

const styles = {
  container: {
    margin: '54px 0 54px 240px',
    padding: 20,
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
}

const mapStateToProps = (state) => {
  return {
    subj: state.subj,
  }
}

export default connect(mapStateToProps)(Home)
