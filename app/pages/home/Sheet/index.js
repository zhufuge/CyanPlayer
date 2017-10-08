import React from 'react'

import Pane from './Pane'
import Tabs from './RectTabs'
import Table from './Table'

const TABS = ['歌曲列表', '评论(0)', '收藏者']

class Sheet extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.container}>
        <Pane />
        <Tabs value={TABS[0]}>
          {TABS.map((v, i) =>
            <div
              key={'sheet-tabs-' + v + i}
              value={v}>
              {v}
            </div>
          )}
        </Tabs>
        <Table />
      </div>
    )
  }
}

const styles = {
}

export default Sheet
