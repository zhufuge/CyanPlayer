import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { cyan500 } from 'material-ui/styles/colors'

import Recommend from './Recommend'
import Sheets from './Sheets'
import Rank from './Rank'
import Singers from './Singers'
import Newest from './Newest'

const DEFAULT = {
  labels: [
    { label: "个性推荐", component: Recommend },
    { label: "歌单", component: Sheets },
    { label: "主播电台", component: Sheets },
    { label: "排行榜", component: Rank },
    { label: "歌手", component: Singers },
    { label: "最新音乐", component: Newest },
  ]
}

class FindMusic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 4,
      hover: -1,
    }
  }

  render() {
    const state = this.state
    return (
      <Tabs
        inkBarStyle={{ background: cyan500 }}
        tabItemContainerStyle={styles.tabItem}
        value={state.value}
        onChange={value => this.setState({ value })}>
        {DEFAULT.labels.map((v, i) =>
          <Tab
            onMouseOver={() => this.setState({ hover: i })}
            onMouseOut={() => this.setState({ hover: -1 })}
            label={v.label}
            value={i}
            buttonStyle={{ color: (i === state.value || i === state.hover)
                                ? cyan500 : '#666' }}>
            <v.component setTab={value => this.setState({ value })}/>
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

export default FindMusic
