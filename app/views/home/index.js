import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import Sider from '../../components/Sider'
import Player from '../../components/Player'

import FindMusic from './FindMusic'
import SongCard from './SongCard'
import DownloadList from './DownloadList'
import Upload from './Upload'
import SongSheet from './SongSheet'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { innerHeight: window.innerHeight }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  updateDimensions() {
    this.setState({ innerHeight: window.innerHeight })
  }

  subj() {
    switch(this.props.subj) {
    case '0': return <FindMusic />
    case '1': return <SongCard key="songcard1" type="random"/>
    case '2': return <SongCard key="songcard2"/>
    case '3': return <Upload />
    case '4': return <DownloadList />
    case '5': return <SongSheet type="mine"/>
    default: return <SongSheet />
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Sider />
        <div style={Object.assign({
            height: this.state.innerHeight - 148,
        }, styles.container) }>
          <div style={{ margin: '0 auto', maxWidth: 980 }}>
            {this.subj()}
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
    subj: state.homeSubj,
  }
}

export default connect(mapStateToProps)(Home)
