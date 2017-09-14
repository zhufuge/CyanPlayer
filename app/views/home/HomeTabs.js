import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { cyan500 } from 'material-ui/styles/colors'

import Recommend from './Recommend'
import SongSheets from './SongSheets'
import RankingLists from './RankingLists'
import SingerList from './SingerList'
import NewestMusic from './NewestMusic'

const DEFAULT = {
  labels: [
    { label: "个性推荐", value: "a", component: <Recommend /> },
    { label: "歌单", value: "b", component: <SongSheets /> },
    { label: "排行榜", value: "c", component: <RankingLists /> },
    { label: "歌手", value: "d", component: <SingerList /> },
    { label: "最新音乐", value: "e", component: <NewestMusic /> },
  ]
}

class HomeTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'a',
      hover: '',
    }
  }

  render() {
    return (
      <Tabs
        inkBarStyle={{ background: cyan500 }}
        tabItemContainerStyle={styles.tabItem}
        value={this.state.value}
        onChange={(value) => this.setState({ value: value })}>
        {DEFAULT.labels.map(v =>
          <Tab
            onMouseOver={() => this.setState({ hover: v.value })}
            onMouseOut={() => this.setState({ hover: '' })}
            label={v.label}
            value={v.value}
            buttonStyle={{ color: (
              v.value === this.state.value ||
              v.value === this.state.hover
            ) ? cyan500 : '#666' }}>
            {v.component}
          </Tab>
        )}
      </Tabs>
    )
  }
}

const styles = {
  tabItem: {
    background: 'rgba(0,0,0,0)',
    borderBottom: '2px solid #ccc'
  }
}

export default HomeTabs
