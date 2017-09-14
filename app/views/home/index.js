import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import Sider from '../../components/Sider'
import Player from '../../components/Player'

import AppTabs from './AppTabs'
import SongCard from './SongCard'
import DownloadList from './DownloadList'
import Upload from './Upload'
import SongSheet from './SongSheet'

class Index extends React.Component {
  page() {
    switch(this.props.page) {
    case '0': return <AppTabs />
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
        <div style={styles.container}>
          {this.page()}
        </div>
        <Player />
      </div>
    )
  }
}

const styles = {
  container: {
    height: window.innerHeight - 148,
    margin: '54px 0 54px 240px',
    padding: '20px 40px',
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
}

const mapStateToProps = (state) => {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps)(Index)
