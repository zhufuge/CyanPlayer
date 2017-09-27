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
//    { label: "主播电台", component: Sheets },
    { label: "排行榜", component: Rank },
    { label: "歌手", component: Singers },
    { label: "最新音乐", component: Newest },
  ]
}

class FindMusic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      hover: -1,
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.value !== this.state.value) {
      this.props.scrollTop()
    }
  }

  render() {
    const state = this.state
    const Component = DEFAULT.labels[state.value].component
    return (
      <div style={styles.container}>
        <Tabs
          inkBarStyle={{ background: cyan500 }}
          tabItemContainerStyle={styles.tabItem}
          value={state.value}
          onChange={value => this.setState({ value })}>
          {DEFAULT.labels.map((v, i) =>
            <Tab
              key={'home-tab-' + v.label + i}
              onMouseOver={() => this.setState({ hover: i })}
              onMouseOut={() => this.setState({ hover: -1 })}
              label={v.label}
              value={i}
              buttonStyle={{ color: (i === state.value || i === state.hover)
                                  ? cyan500 : '#666' }}>
            </Tab>
          )}
        </Tabs>
        <Component setTab={value => this.setState({ value })}/>
      </div>
    )
  }
}

const styles = {
  container: {
    position: 'relative',
  },
  tabItem: {
    background: '#fff0',
    borderBottom: '2px solid #ccc',
  },
}

export default FindMusic
