import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import AppList from './AppList'
import AppTabs from './AppTabs'
import SongCard from './SongCard'
import DownloadList from './DownloadList'
import Upload from './Upload'
import SongSheet from './SongSheet'
import Player from './Player'

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
        <div style={styles.container}>
          <AppList />
          {this.page()}
        </div>
        <Player />
      </div>
    )
  }
}


const styles = {
  container: {
    margin: '70px auto',
    width: 1280,
    display: 'flex',
    justifyContent: 'center',
  },
}

const mapStateToProps = (state) => {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps)(Index)
