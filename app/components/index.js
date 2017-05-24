import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import AppList from './AppList';
import AppTabs from './AppTabs';
import SongCard from './SongCard';
import DownloadList from './DownloadList';
import SongSheet from './SongSheet';
import Player from './player';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  page() {
    switch(this.props.page) {
    case '0': return <AppTabs />;
    case '1': return <SongCard type="random"/>;
    case '2': return <SongCard />;
    case '3': return <DownloadList />;
    case '4': return <DownloadList />;
    case '5': return <SongSheet />;
    default: return <SongSheet />;
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
    );
  }
}


const styles = {
  container: {
    margin: '70px 0 0 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
};

const mapStateToProps = (state) => {
  return {
    page: state.page
  };
};

export default connect(mapStateToProps)(Index);
