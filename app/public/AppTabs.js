import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import Recommend from './Recommend';
import SongSheets from './SongSheets';
import RankingLists from './RankingLists';
import SingerList from './SingerList';
import NewestMusic from './NewestMusic';

class TabsExampleControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'a'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({value: value});
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        contentContainerStyle={styles.container}
        tabTemplateStyle={styles.content}
        onChange={this.handleChange}>
        <Tab label="个性推荐" value="a"><Recommend /></Tab>
        <Tab label="歌单" value="b"><SongSheets /></Tab>
        <Tab label="排行榜" value="c"><RankingLists /></Tab>
        <Tab label="歌手" value="d"><SingerList /></Tab>
        <Tab label="最新音乐" value="e"><NewestMusic /></Tab>
      </Tabs>
    );
  }
}

const styles = {
  container: {
    width: 800,
  },
  content: {
    width: 800,
  },
};

export default TabsExampleControlled;
