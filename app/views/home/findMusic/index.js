import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { cyan500 } from 'material-ui/styles/colors'

import Recommend from './Recommend'
import Sheets from './Sheets'
import Ranking from './Ranking'
import Singers from './Singers'
import Newest from './Newest'

const DEFAULT = {
  labels: [
    { label: "个性推荐", value: "a", component: Recommend },
    { label: "歌单", value: "b", component: Sheets },
    { label: "排行榜", value: "c", component: Ranking },
    { label: "歌手", value: "d", component: Singers },
    { label: "最新音乐", value: "e", component: Newest },
  ]
}

class FindMusic extends React.Component {
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
            {(v.value === 'a')
             ? <v.component setTab={value => this.setState({ value })}/>
             : <v.component />}
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
